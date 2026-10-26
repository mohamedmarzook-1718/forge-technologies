import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Loader2 } from 'lucide-react';
import { ForgeLogoSvg } from './ForgeLogoSvg';

interface ForgeLogo3DProps {
  modelPath?: string;
  className?: string;
}

export const ForgeLogo3D: React.FC<ForgeLogo3DProps> = ({
  modelPath = '/models/fforge.glb',
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Reset error/loading state on modelPath change
    setIsLoading(true);
    setHasError(false);
    setErrorMessage(null);

    // Reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene, Camera, and Renderer
    const scene = new THREE.Scene();

    const width = container.clientWidth || 540;
    const height = container.clientHeight || 440;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.4);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn('[ForgeLogo3D] WebGL not supported or init failed:', e);
      setHasError(true);
      setErrorMessage('WebGL hardware acceleration unavailable');
      setIsLoading(false);
      return;
    }

    // 2. Studio Lighting Setup (Calibrated for crisp brushed titanium on light background)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.15);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(5, 6, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x94a3b8, 1.3);
    fillLight.position.set(-5, -2, 4);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0x0284c7, 1.2, 25);
    rimLight.position.set(0, 3, -4);
    scene.add(rimLight);

    // Subtle bottom bounce light for metallic depth
    const bounceLight = new THREE.DirectionalLight(0xcfd8dc, 0.7);
    bounceLight.position.set(0, -5, 2);
    scene.add(bounceLight);

    // 3. Anchor group for the model
    const modelAnchor = new THREE.Group();
    scene.add(modelAnchor);

    let emblemNode: THREE.Object3D | null = null;
    let wordmarkNode: THREE.Object3D | null = null;
    let mixer: THREE.AnimationMixer | null = null;
    let isDisposed = false;

    // Mouse parallax tracking
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion || !container) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = x * 0.18;
      targetRotationX = y * 0.12;
    };

    container.addEventListener('mousemove', handleMouseMove);

    const handleMouseLeave = () => {
      targetRotationX = 0;
      targetRotationY = 0;
    };
    container.addEventListener('mouseleave', handleMouseLeave);

    // 4. Load GLB Model
    const loader = new GLTFLoader();

    const loadModel = (url: string, fallbackUrl?: string) => {
      loader.load(
        url,
        (gltf) => {
          if (isDisposed) return;

          try {
            // Remove studio floor/ground objects from display and bounding calculations
            const objectsToRemove: THREE.Object3D[] = [];
            gltf.scene.traverse((child) => {
              const name = (child.name || '').toLowerCase();
              if (
                name.includes('floor') ||
                name.includes('ground') ||
                (name.includes('plane') && (child as THREE.Mesh).isMesh)
              ) {
                objectsToRemove.push(child);
              }

              if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;
                mesh.castShadow = false;
                mesh.receiveShadow = false;
                if (mesh.material) {
                  if (Array.isArray(mesh.material)) {
                    mesh.material.forEach((m) => {
                      m.side = THREE.DoubleSide;
                    });
                  } else {
                    mesh.material.side = THREE.DoubleSide;
                  }
                }
              }
            });

            // Detach floor plane so it does not distort scale
            objectsToRemove.forEach((obj) => {
              if (obj.parent) {
                obj.parent.remove(obj);
              }
            });

            // Detect emblem root node (for rotation pivot) and wordmark node
            let emblemRootNode: THREE.Object3D | null = null;
            let emblemMeshNode: THREE.Object3D | null = null;

            gltf.scene.traverse((child) => {
              const name = (child.name || '').toLowerCase();
              if (
                name.includes('emblem root') ||
                name.includes('animated emblem root') ||
                (name.includes('emblem') && child.children.length > 0)
              ) {
                if (!emblemRootNode) emblemRootNode = child;
              } else if (
                name.includes('emblem') ||
                name.includes('hourglass') ||
                name.includes('symbol')
              ) {
                if (!emblemMeshNode) emblemMeshNode = child;
              }

              if (
                !wordmarkNode &&
                (name.includes('wordmark') ||
                  name.includes('text') ||
                  name.includes('typography') ||
                  name.includes('brand'))
              ) {
                wordmarkNode = child;
              }
            });

            emblemNode = emblemRootNode || emblemMeshNode;

            // If no explicit emblem found, use first child
            if (!emblemNode && gltf.scene.children.length > 0) {
              emblemNode = gltf.scene.children[0];
            }

            // Check for Blender animation clips
            if (gltf.animations && gltf.animations.length > 0) {
              mixer = new THREE.AnimationMixer(gltf.scene);
              gltf.animations.forEach((clip) => {
                const action = mixer!.clipAction(clip);
                action.play();
              });
              console.info('[Forge 3D] Playing Blender animations:', gltf.animations.map((c) => c.name));
            }

            // Calculate precise bounding box of the remaining logo meshes
            const bbox = new THREE.Box3();
            gltf.scene.traverse((child) => {
              if ((child as THREE.Mesh).isMesh) {
                bbox.expandByObject(child);
              }
            });

            if (bbox.isEmpty()) {
              bbox.setFromObject(gltf.scene);
            }

            const center = bbox.getCenter(new THREE.Vector3());
            const size = bbox.getSize(new THREE.Vector3());
            const maxDimension = Math.max(size.x, size.y, size.z);

            // Prominent, well-proportioned scale: increased targetSize from 2.9 to 3.45
            // Gives the 3D emblem a bold presence while retaining safe margins for 360-degree rotation
            const targetSize = 3.45;
            const normalizedScale = maxDimension > 0 ? targetSize / maxDimension : 1;

            gltf.scene.position.set(
              -center.x * normalizedScale,
              -center.y * normalizedScale,
              -center.z * normalizedScale
            );
            // Uniform scale preserves true geometric proportions with zero stretching during 360 rotation
            gltf.scene.scale.setScalar(normalizedScale);

            modelAnchor.add(gltf.scene);
            setIsLoading(false);
          } catch (err) {
            console.error('[Forge 3D] Error parsing GLTF scene:', err);
            setHasError(true);
            setErrorMessage('Error rendering 3D model');
            setIsLoading(false);
          }
        },
        (xhr) => {
          if (xhr.lengthComputable && xhr.total > 0) {
            const percent = Math.round((xhr.loaded / xhr.total) * 100);
            setLoadingProgress(percent);
          }
        },
        (err) => {
          console.warn(`[Forge 3D] Failed to load ${url}:`, err);
          if (fallbackUrl && fallbackUrl !== url) {
            console.info(`[Forge 3D] Retrying with fallback: ${fallbackUrl}`);
            loadModel(fallbackUrl);
          } else {
            console.error('[Forge 3D] All model loading attempts failed:', err);
            setHasError(true);
            setErrorMessage('Failed to load 3D model');
            setIsLoading(false);
          }
        }
      );
    };

    loadModel(modelPath || '/models/fforge.glb', '/models/fforge.glb');

    // 5. Render Loop with Animation & Parallax
    let animationFrameId: number;
    const clock = new THREE.Clock();
    const cycleDuration = 5.0; // 5 seconds per full revolution

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse parallax damping
      modelAnchor.rotation.x += (targetRotationX - modelAnchor.rotation.x) * 0.08;
      modelAnchor.rotation.y += (targetRotationY - modelAnchor.rotation.y) * 0.08;

      if (!prefersReducedMotion) {
        if (mixer) {
          mixer.update(delta);
        } else if (emblemNode) {
          // Continuous 5-second rotation cycle for emblem
          const rotationAngle = (elapsedTime * (Math.PI * 2)) / cycleDuration;
          emblemNode.rotation.y = rotationAngle;

          if (wordmarkNode && wordmarkNode !== emblemNode) {
            wordmarkNode.rotation.y = 0;
          }
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // 6. Responsive Resize Handling
    const handleResize = () => {
      if (!container || !renderer) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth === 0 || newHeight === 0) return;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 7. Cleanup
    return () => {
      isDisposed = true;
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);

      scene.traverse((obj) => {
        if ((obj as THREE.Mesh).isMesh) {
          const mesh = obj as THREE.Mesh;
          if (mesh.geometry) mesh.geometry.dispose();
          if (mesh.material) {
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach((m) => m.dispose());
            } else {
              mesh.material.dispose();
            }
          }
        }
      });

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [modelPath]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[380px] sm:h-[430px] lg:h-[480px] flex items-center justify-center select-none ${className}`}
      aria-label="Forge Technologies Interactive 3D Model"
      role="img"
    >
      {/* Loading Indicator */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/85 backdrop-blur-sm rounded-2xl transition-opacity duration-300">
          <div className="relative flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-sky-600 animate-spin" />
            <div className="absolute w-12 h-12 rounded-full border border-sky-400/30 animate-ping pointer-events-none" />
          </div>
          <p className="mt-4 font-mono-code text-xs text-slate-600 tracking-wider uppercase">
            Loading 3D Logo {loadingProgress > 0 ? `(${loadingProgress}%)` : ''}
          </p>
        </div>
      )}

      {/* Static Fallback on Error */}
      {hasError && (
        <div className="flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300 z-10">
          <ForgeLogoSvg
            variant="full"
            size={160}
            className="filter drop-shadow-[0_4px_16px_rgba(15,23,42,0.1)]"
          />
          <p className="mt-3 font-mono-code text-xs text-slate-500">
            {errorMessage || 'Static logo fallback'}
          </p>
        </div>
      )}

      {/* Subtle depth lighting behind 3D object */}
      <div className="absolute inset-0 bg-radial from-sky-500/[0.03] via-transparent to-transparent blur-3xl -z-10 pointer-events-none" />
    </div>
  );
};
