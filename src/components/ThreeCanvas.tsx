import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  className?: string;
  intensity?: number;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ 
  className = "w-full h-full absolute inset-0 pointer-events-auto",
  intensity = 1 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for all rotating elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8 * intensity);
    scene.add(ambientLight);

    const purpleLight = new THREE.PointLight(0x7c3aed, 3 * intensity, 20);
    purpleLight.position.set(4, 3, 3);
    scene.add(purpleLight);

    const goldLight = new THREE.PointLight(0xf59e0b, 2 * intensity, 20);
    goldLight.position.set(-4, -2, 2);
    scene.add(goldLight);

    const frontLight = new THREE.DirectionalLight(0xffffff, 1.2 * intensity);
    frontLight.position.set(0, 5, 5);
    scene.add(frontLight);

    // 1. Central 3D Icosahedron Gem (Frosted / Gem Style)
    const gemGeometry = new THREE.IcosahedronGeometry(1.6, 0);
    const gemMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x3C225D,
      emissive: 0x220e3a,
      roughness: 0.15,
      metalness: 0.2,
      transmission: 0.6,
      thickness: 1.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
    });
    const centralGem = new THREE.Mesh(gemGeometry, gemMaterial);
    mainGroup.add(centralGem);

    // Outer Wireframe Cage (Gold/Purple Accent)
    const wireframeGeometry = new THREE.IcosahedronGeometry(1.64, 0);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xcca6ec,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    mainGroup.add(wireframeMesh);

    // 2. Orbiting Satellite Nodes (College Access / Knowledge Nodes)
    const nodeCount = 5;
    const nodes: THREE.Mesh[] = [];
    const nodeGroup = new THREE.Group();
    mainGroup.add(nodeGroup);

    const nodeColors = [0x9333ea, 0xd97706, 0x6366f1, 0xa855f7, 0xec4899];

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 2.8 + (i % 2) * 0.4;
      const nodeGeo = new THREE.OctahedronGeometry(0.22 + (i % 3) * 0.06, 0);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: nodeColors[i % nodeColors.length],
        roughness: 0.2,
        metalness: 0.7,
        emissive: nodeColors[i % nodeColors.length],
        emissiveIntensity: 0.4,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 1.5) * 0.9,
        Math.sin(angle) * radius
      );
      nodeGroup.add(nodeMesh);
      nodes.push(nodeMesh);
    }

    // 3. Delicate Floating Particles Dust
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 12;
      particlePositions[i + 1] = (Math.random() - 0.5) * 8;
      particlePositions[i + 2] = (Math.random() - 0.5) * 6;
      particleScales[i / 3] = Math.random() * 0.05 + 0.02;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x9333ea,
      size: 0.06,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Tracking and Smooth Inertia
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.8;
      targetY = y * 0.6;

      if (isDragging) {
        const deltaX = event.clientX - previousMousePosition.x;
        const deltaY = event.clientY - previousMousePosition.y;
        mainGroup.rotation.y += deltaX * 0.01;
        mainGroup.rotation.x += deltaY * 0.01;
      }
      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const handleMouseDown = (event: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth lag towards mouse cursor
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Base auto-rotation
      if (!isDragging) {
        mainGroup.rotation.y = elapsedTime * 0.25 + mouseX;
        mainGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.2 + mouseY;
      }

      // Pulse and breathing effect for central gem
      const scale = 1 + Math.sin(elapsedTime * 1.5) * 0.03;
      centralGem.scale.set(scale, scale, scale);
      wireframeMesh.scale.set(scale, scale, scale);
      wireframeMesh.rotation.y = -elapsedTime * 0.15;
      wireframeMesh.rotation.z = Math.cos(elapsedTime * 0.2) * 0.1;

      // Rotate orbiting satellite nodes
      nodeGroup.rotation.y = -elapsedTime * 0.4;
      nodeGroup.rotation.x = Math.sin(elapsedTime * 0.5) * 0.2;

      nodes.forEach((node, idx) => {
        node.rotation.x += 0.02;
        node.rotation.y += 0.03;
        const floatY = Math.sin(elapsedTime * 2 + idx) * 0.08;
        node.position.y += floatY * 0.01;
      });

      // Subtle particle drift
      particles.rotation.y = elapsedTime * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [intensity]);

  return (
    <div 
      ref={containerRef} 
      className={className} 
      style={{ touchAction: 'none' }}
      title="Interactive 3D Knowledge Gem — Move cursor or drag to rotate"
    />
  );
};
