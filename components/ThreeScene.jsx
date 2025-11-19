"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useRef } from 'react';
import { OrbitControls, Stars, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';
import Planet from './Planet';

function Sun() {
  const sun = useRef();
  useFrame((_s, dt) => {
    if (sun.current) sun.current.rotation.y += dt * 0.2;
  });
  return (
    <group ref={sun}>
      <mesh>
        <sphereGeometry args={[1.4, 64, 64]} />
        <meshStandardMaterial emissive={new THREE.Color('#ffb347')} emissiveIntensity={3} color="#ff8c00" roughness={0.4} metalness={0.1} />
      </mesh>
      <pointLight intensity={3.4} distance={50} color={'#ffdd88'} />
    </group>
  );
}

function Rings({ radius = 3.8, inner = 0.45, outer = 0.9, color = '#9ea7ff' }) {
  const ringGeom = useMemo(() => new THREE.RingGeometry(radius * inner, radius * outer, 128), [radius, inner, outer]);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <primitive object={ringGeom} />
      <meshBasicMaterial color={color} transparent opacity={0.18} side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <div className="canvasWrap" aria-hidden>
      <Canvas
        gl={{ antialias: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 4.5, 11], fov: 55 }}
        dpr={[1, 2]}
      >
        <color attach="background" args={[0x03040a]} />
        <fog attach="fog" args={[0x03040a, 22, 60]} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.12} />
          <Sun />
          <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
            <Planet name="Mercury" color="#b1a7a6" radius={2.2} size={0.22} speed={1.6} />
          </Float>
          <Planet name="Venus" color="#deb887" radius={2.9} size={0.32} speed={1.2} />
          <Planet name="Earth" color="#6bd1ff" radius={3.7} size={0.34} speed={1.0} hasMoon />
          <Planet name="Mars" color="#ff6b6b" radius={4.5} size={0.28} speed={0.85} />
          <group rotation={[0, 0.25, 0]}>
            <Planet name="Jupiter" color="#f9c784" radius={6.5} size={0.9} speed={0.4} />
            <Rings radius={8.2} inner={0.9} outer={1.05} color="#ffffff" />
          </group>
          <Planet name="Saturn" color="#ffe29a" radius={8.2} size={0.7} speed={0.32} rings />
          <Planet name="Uranus" color="#a7e8f2" radius={9.6} size={0.5} speed={0.28} />
          <Planet name="Neptune" color="#6d8cff" radius={10.8} size={0.48} speed={0.24} />

          <Stars radius={120} depth={40} count={4500} factor={3} saturation={0.3} fade speed={0.6} />
          <Environment preset="night" background={false} />
        </Suspense>
        <OrbitControls enableDamping dampingFactor={0.08} minDistance={6} maxDistance={26} />
      </Canvas>
    </div>
  );
}
