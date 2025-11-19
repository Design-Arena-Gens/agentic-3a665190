"use client";

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Planet({ name, color = '#6bd1ff', radius = 3.5, size = 0.4, speed = 1.0, hasMoon = false, rings = false }) {
  const pivot = useRef();
  const planet = useRef();
  const startAngle = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((_s, dt) => {
    const rotSpeed = 0.6; // planet self-rotation
    if (planet.current) planet.current.rotation.y += dt * rotSpeed;
    if (pivot.current) pivot.current.rotation.y += dt * (speed * 0.18);
  });

  return (
    <group ref={pivot} rotation={[0, startAngle, 0]}
      userData={{ name }}
    >
      <group position={[radius, 0, 0]}>
        <mesh ref={planet} castShadow receiveShadow>
          <sphereGeometry args={[size, 48, 48]} />
          <meshStandardMaterial color={color} roughness={0.6} metalness={0.15} emissive={new THREE.Color(color).multiplyScalar(0.02)} />
        </mesh>
        {rings && (
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[size * 1.2, size * 2.4, 92]} />
            <meshBasicMaterial color={color} transparent opacity={0.22} side={THREE.DoubleSide} />
          </mesh>
        )}
        {hasMoon && (
          <Moon parentRadius={size} />
        )}
        {/* Faint orbit indicator */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-radius, 0, 0]}>
          <ringGeometry args={[radius * 0.98, radius * 1.02, 256]} />
          <meshBasicMaterial color="#3a3f66" transparent opacity={0.25} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  );
}

function Moon({ parentRadius }) {
  const pivot = useRef();
  useFrame((_s, dt) => {
    if (pivot.current) pivot.current.rotation.y += dt * 0.8;
  });
  return (
    <group ref={pivot}>
      <mesh position={[parentRadius * 2.2, 0, 0]}>
        <sphereGeometry args={[parentRadius * 0.35, 24, 24]} />
        <meshStandardMaterial color="#cfd8e3" roughness={0.8} metalness={0.05} />
      </mesh>
    </group>
  );
}
