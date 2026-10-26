import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ForgeCanvas3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();

    const width = container.clientWidth || 540;
    const height = container.clientHeight || 460;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5.8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Master Group for the 3D Hourglass Logo
    const logoGroup = new THREE.Group();
    scene.add(logoGroup);

    // 2. Realistic Metallic Materials (Chiseled Brushed Titanium / Polished Chrome)
    const chromeFacetMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xE8ECF2,
      emissive: 0x0A101D,
      metalness: 0.94,
      roughness: 0.22,
      clearcoat: 0.75,
      clearcoatRoughness: 0.18,
      reflectivity: 0.9,
      flatShading: true,
      side: THREE.DoubleSide
    });

    const brushedSecondaryMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xCAD4E0,
      emissive: 0x060B14,
      metalness: 0.90,
      roughness: 0.32,
      clearcoat: 0.5,
      clearcoatRoughness: 0.25,
      flatShading: true,
      side: THREE.DoubleSide
    });

    const arrowMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xF1F5F9,
      emissive: 0x0E2033,
      metalness: 0.96,
      roughness: 0.15,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      flatShading: true,
      side: THREE.DoubleSide
    });

    // 3. Construct the 3D Geometric Hourglass Facets
    // Top inverted pyramid / faceted trapezoid
    const topShape = new THREE.Shape();
    topShape.moveTo(-1.45, 1.35);
    topShape.lineTo(1.25, 1.35);
    topShape.lineTo(0.25, 0.15);
    topShape.lineTo(-0.85, 0.15);
    topShape.closePath();

    const extrudeSettingsTop = {
      steps: 1,
      depth: 0.22,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.06,
      bevelSegments: 2
    };

    const topGeometry = new THREE.ExtrudeGeometry(topShape, extrudeSettingsTop);
    topGeometry.center();
    const topMesh = new THREE.Mesh(topGeometry, chromeFacetMaterial);
    topMesh.position.set(-0.15, 0.72, 0);
    logoGroup.add(topMesh);

    // Bottom upright pyramid / faceted trapezoid
    const bottomShape = new THREE.Shape();
    bottomShape.moveTo(-1.55, -1.25);
    bottomShape.lineTo(0.55, -1.25);
    bottomShape.lineTo(-0.05, -0.05);
    bottomShape.lineTo(-1.05, -0.05);
    bottomShape.closePath();

    const extrudeSettingsBottom = {
      steps: 1,
      depth: 0.22,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.06,
      bevelSegments: 2
    };

    const bottomGeometry = new THREE.ExtrudeGeometry(bottomShape, extrudeSettingsBottom);
    bottomGeometry.center();
    const bottomMesh = new THREE.Mesh(bottomGeometry, brushedSecondaryMaterial);
    bottomMesh.position.set(-0.55, -0.65, 0.02);
    logoGroup.add(bottomMesh);

    // Diagonal Origami Spine connecting top-left to bottom-center (the 'Z' folding fold)
    const spineShape = new THREE.Shape();
    spineShape.moveTo(-1.45, 1.35);
    spineShape.lineTo(-0.55, 1.35);
    spineShape.lineTo(0.55, -1.25);
    spineShape.lineTo(-0.35, -1.25);
    spineShape.closePath();

    const spineGeometry = new THREE.ExtrudeGeometry(spineShape, {
      steps: 1,
      depth: 0.28,
      bevelEnabled: true,
      bevelThickness: 0.09,
      bevelSize: 0.07,
      bevelSegments: 2
    });
    spineGeometry.center();
    const spineMesh = new THREE.Mesh(spineGeometry, chromeFacetMaterial);
    spineMesh.position.set(-0.45, 0.05, 0.06);
    spineMesh.rotation.z = 0.08;
    logoGroup.add(spineMesh);

    // Dynamic Ascending Arrow Wing (sweeping upward from bottom right)
    const arrowWingShape = new THREE.Shape();
    arrowWingShape.moveTo(-1.1, -1.45);
    arrowWingShape.lineTo(0.4, -1.45);
    arrowWingShape.quadraticCurveTo(0.9, -1.1, 1.25, -0.3);
    arrowWingShape.lineTo(1.55, 0.15); // Arrowhead peak
    arrowWingShape.lineTo(1.58, -0.35);
    arrowWingShape.quadraticCurveTo(1.05, -0.85, 0.35, -1.2);
    arrowWingShape.lineTo(-0.85, -1.2);
    arrowWingShape.closePath();

    const arrowGeometry = new THREE.ExtrudeGeometry(arrowWingShape, {
      steps: 1,
      depth: 0.18,
      bevelEnabled: true,
      bevelThickness: 0.06,
      bevelSize: 0.05,
      bevelSegments: 2
    });
    arrowGeometry.center();
    const arrowMesh = new THREE.Mesh(arrowGeometry, arrowMaterial);
    arrowMesh.position.set(0.35, -0.65, 0.12);
    logoGroup.add(arrowMesh);

    // Subtle Cyan Edge Highlight (Precision High-Tech Wire Contour)
    const edgesTop = new THREE.EdgesGeometry(topGeometry, 30);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x38BDF8,
      transparent: true,
      opacity: 0.28
    });
    const wireTop = new THREE.LineSegments(edgesTop, lineMat);
    topMesh.add(wireTop);

    const edgesSpine = new THREE.EdgesGeometry(spineGeometry, 30);
    const wireSpine = new THREE.LineSegments(edgesSpine, lineMat);
    spineMesh.add(wireSpine);

    const edgesArrow = new THREE.EdgesGeometry(arrowGeometry, 30);
    const arrowLineMat = new THREE.LineBasicMaterial({
      color: 0x38BDF8,
      transparent: true,
      opacity: 0.45
    });
    const wireArrow = new THREE.LineSegments(edgesArrow, arrowLineMat);
    arrowMesh.add(wireArrow);

    // 4. Realistic Studio Lighting Rig
    // Hemisphere ambient light for natural metallic contrast
    const hemiLight = new THREE.HemisphereLight(0xFFFFFF, 0x080E1A, 0.85);
    scene.add(hemiLight);

    // Key Studio Light (Pure Neutral White, High-Angle Specular)
    const keyLight = new THREE.DirectionalLight(0xFFFFFF, 3.2);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    // Secondary Fill Light (Cool Soft Slate)
    const fillLight = new THREE.DirectionalLight(0x94A3B8, 1.6);
    fillLight.position.set(-5, -2, 3);
    scene.add(fillLight);

    // Electric Cyan Rim Light (Accentuates the chiseled edges)
    const cyanRimLight = new THREE.PointLight(0x38BDF8, 3.5, 20);
    cyanRimLight.position.set(3, -2, 2.5);
    scene.add(cyanRimLight);

    // Top Rim Specular (Highlights the top horizontal facet)
    const topRimLight = new THREE.PointLight(0xE2E8F0, 2.2, 15);
    topRimLight.position.set(0, 4, 2);
    scene.add(topRimLight);

    // 5. Smooth Cursor Tracking & Controlled Floating Oscillation
    let mouseX = 0;
    let mouseY = 0;
    let targetRotY = 0;
    let targetRotX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      // Gentle parallax threshold so the logo remains strictly recognizable and front-facing
      mouseX = Math.max(-1, Math.min(1, x)) * 0.28;
      mouseY = Math.max(-1, Math.min(1, y)) * 0.20;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 6. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Subtle resting breath/floating oscillation (never excessive)
        logoGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.06;

        // Controlled subtle yaw wave (keeps the face recognizable at all times)
        const idleYaw = Math.sin(elapsedTime * 0.8) * 0.12;

        // Smooth physics-damped interpolation toward mouse target
        targetRotY += (mouseX + idleYaw - targetRotY) * 0.06;
        targetRotX += (-mouseY - targetRotX) * 0.06;

        logoGroup.rotation.y = targetRotY;
        logoGroup.rotation.x = targetRotX;

        // Dynamic light movement to shimmer across the metallic facets
        cyanRimLight.position.x = 2.5 + Math.cos(elapsedTime * 1.4) * 0.8;
        cyanRimLight.position.y = -2 + Math.sin(elapsedTime * 1.2) * 0.6;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 7. Responsive Resizing
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth === 0 || newHeight === 0) return;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      topGeometry.dispose();
      bottomGeometry.dispose();
      spineGeometry.dispose();
      arrowGeometry.dispose();
      edgesTop.dispose();
      edgesSpine.dispose();
      edgesArrow.dispose();
      chromeFacetMaterial.dispose();
      brushedSecondaryMaterial.dispose();
      arrowMaterial.dispose();
      lineMat.dispose();
      arrowLineMat.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[360px] sm:h-[420px] lg:h-[460px] flex items-center justify-center pointer-events-none select-none"
      aria-label="Forge Technologies 3D Geometric Hourglass Emblem"
      role="img"
    >
      {/* Subtle realistic lighting gradient scrim beneath 3D object */}
      <div className="absolute inset-0 bg-radial from-cyan-500/[0.06] via-transparent to-transparent blur-2xl -z-10" />
    </div>
  );
};
