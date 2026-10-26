import * as THREE from 'three';
import * as fs from 'fs';
import * as path from 'path';

// Polyfill FileReader for Node
if (typeof globalThis.FileReader === 'undefined') {
  class NodeFileReader {
    onload: any = null;
    onloadend: any = null;
    onerror: any = null;
    result: any = null;
    readAsArrayBuffer(blob: any) {
      if (blob.arrayBuffer) {
        blob.arrayBuffer().then((buf: ArrayBuffer) => {
          this.result = buf;
          if (this.onload) this.onload({ target: this });
          if (this.onloadend) this.onloadend({ target: this });
        }).catch((err: any) => {
          if (this.onerror) this.onerror(err);
        });
      }
    }
    readAsDataURL(blob: any) {
      if (blob.arrayBuffer) {
        blob.arrayBuffer().then((buf: ArrayBuffer) => {
          const base64 = Buffer.from(buf).toString('base64');
          this.result = `data:${blob.type || 'application/octet-stream'};base64,${base64}`;
          if (this.onload) this.onload({ target: this });
        }).catch((err: any) => {
          if (this.onerror) this.onerror(err);
        });
      }
    }
  }
  (globalThis as any).FileReader = NodeFileReader;
}

import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

// Create scene
const scene = new THREE.Scene();
scene.name = 'ForgeLogoScene';

// Material: Pristine white (#FFFFFF) with subtle physical finish
const whiteMaterial = new THREE.MeshStandardMaterial({
  color: 0xFFFFFF,
  roughness: 0.25,
  metalness: 0.15,
  name: 'ForgeWhiteMaterial'
});

// 1. Emblem Group & Meshes
const emblemGroup = new THREE.Group();
emblemGroup.name = 'Emblem';

// Top facet
const topShape = new THREE.Shape();
topShape.moveTo(-1.45, 1.35);
topShape.lineTo(1.25, 1.35);
topShape.lineTo(0.25, 0.15);
topShape.lineTo(-0.85, 0.15);
topShape.closePath();

const extrudeTop = new THREE.ExtrudeGeometry(topShape, {
  depth: 0.22,
  bevelEnabled: true,
  bevelThickness: 0.08,
  bevelSize: 0.06,
  bevelSegments: 2
});
extrudeTop.center();
const topMesh = new THREE.Mesh(extrudeTop, whiteMaterial);
topMesh.name = 'Emblem_TopFacet';
topMesh.position.set(-0.15, 0.72, 0);
emblemGroup.add(topMesh);

// Bottom facet
const bottomShape = new THREE.Shape();
bottomShape.moveTo(-1.55, -1.25);
bottomShape.lineTo(0.55, -1.25);
bottomShape.lineTo(-0.05, -0.05);
bottomShape.lineTo(-1.05, -0.05);
bottomShape.closePath();

const extrudeBottom = new THREE.ExtrudeGeometry(bottomShape, {
  depth: 0.22,
  bevelEnabled: true,
  bevelThickness: 0.08,
  bevelSize: 0.06,
  bevelSegments: 2
});
extrudeBottom.center();
const bottomMesh = new THREE.Mesh(extrudeBottom, whiteMaterial);
bottomMesh.name = 'Emblem_BottomFacet';
bottomMesh.position.set(-0.55, -0.65, 0.02);
emblemGroup.add(bottomMesh);

// Diagonal spine
const spineShape = new THREE.Shape();
spineShape.moveTo(-1.45, 1.35);
spineShape.lineTo(-0.55, 1.35);
spineShape.lineTo(0.55, -1.25);
spineShape.lineTo(-0.35, -1.25);
spineShape.closePath();

const extrudeSpine = new THREE.ExtrudeGeometry(spineShape, {
  depth: 0.28,
  bevelEnabled: true,
  bevelThickness: 0.09,
  bevelSize: 0.07,
  bevelSegments: 2
});
extrudeSpine.center();
const spineMesh = new THREE.Mesh(extrudeSpine, whiteMaterial);
spineMesh.name = 'Emblem_Spine';
spineMesh.position.set(-0.45, 0.05, 0.06);
spineMesh.rotation.z = 0.08;
emblemGroup.add(spineMesh);

// Arrow wing
const arrowWingShape = new THREE.Shape();
arrowWingShape.moveTo(-1.1, -1.45);
arrowWingShape.lineTo(0.4, -1.45);
arrowWingShape.quadraticCurveTo(0.9, -1.1, 1.25, -0.3);
arrowWingShape.lineTo(1.55, 0.15);
arrowWingShape.lineTo(1.58, -0.35);
arrowWingShape.quadraticCurveTo(1.05, -0.85, 0.35, -1.2);
arrowWingShape.lineTo(-0.85, -1.2);
arrowWingShape.closePath();

const extrudeArrow = new THREE.ExtrudeGeometry(arrowWingShape, {
  depth: 0.18,
  bevelEnabled: true,
  bevelThickness: 0.06,
  bevelSize: 0.05,
  bevelSegments: 2
});
extrudeArrow.center();
const arrowMesh = new THREE.Mesh(extrudeArrow, whiteMaterial);
arrowMesh.name = 'Emblem_ArrowWing';
arrowMesh.position.set(0.35, -0.65, 0.12);
emblemGroup.add(arrowMesh);

scene.add(emblemGroup);

// 2. Wordmark (Stationary separate object in GLB)
const wordmarkGroup = new THREE.Group();
wordmarkGroup.name = 'Wordmark';

// Subtitle badge / typography bar
const barGeo = new THREE.BoxGeometry(2.4, 0.06, 0.08);
const barMesh = new THREE.Mesh(barGeo, whiteMaterial);
barMesh.name = 'Wordmark_Base';
barMesh.position.set(0, -1.9, 0);
wordmarkGroup.add(barMesh);

scene.add(wordmarkGroup);

// Output directory
const outputDir = path.resolve(process.cwd(), 'public/models');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}
const outputPath = path.join(outputDir, 'forge-logo.glb');

async function exportGlb() {
  const exporter = new GLTFExporter();
  try {
    const gltf = await exporter.parseAsync(scene, { binary: true });
    if (gltf instanceof ArrayBuffer) {
      fs.writeFileSync(outputPath, Buffer.from(gltf));
      console.log('Successfully generated GLB at:', outputPath);
    } else {
      fs.writeFileSync(outputPath, JSON.stringify(gltf, null, 2));
      console.log('Successfully generated JSON GLTF at:', outputPath);
    }
  } catch (error) {
    console.error('An error occurred while exporting GLB:', error);
  }
}

await exportGlb();
