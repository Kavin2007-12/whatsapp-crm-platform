"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const GREEN = "#17c978";
const CYAN = "#7cf5d0";

function ParticleField({ count = 220 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.5 + Math.random() * 5.5;
      const a = Math.random() * Math.PI * 2;
      const z = (Math.random() - 0.5) * 5;
      p[i * 3] = Math.cos(a) * r;
      p[i * 3 + 1] = Math.sin(a) * r * 0.55;
      p[i * 3 + 2] = z;
    }
    return p;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * 0.012;
  });

  return (
    <points ref={ref} position={[0, 0, -0.8]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={CYAN} size={0.018} transparent opacity={0.45} sizeAttenuation />
    </points>
  );
}

function Orbit({ radius, tilt, speed, offset = 0 }: { radius: number; tilt: number; speed: number; offset?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed;
  });
  return (
    <group ref={ref} rotation={[tilt, 0, offset]}>
      <mesh rotation={[0, 0, 0]}>
        <torusGeometry args={[radius, 0.008, 8, 160]} />
        <meshBasicMaterial color={GREEN} transparent opacity={0.25} />
      </mesh>
    </group>
  );
}

function Node({ position, scale = 1, speed = 0.35, phase = 0 }: { position: [number, number, number]; scale?: number; speed?: number; phase?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime * speed + phase;
    ref.current.position.y = position[1] + Math.sin(t) * 0.06;
    ref.current.rotation.x = t * 0.2;
    ref.current.rotation.y = t * 0.3;
  });
  return (
    <group ref={ref} position={position} scale={scale}>
      <mesh>
        <icosahedronGeometry args={[0.12, 2]} />
        <meshPhysicalMaterial color="#f7fffc" roughness={0.16} metalness={0.15} transmission={0.2} transparent opacity={0.9} />
      </mesh>
      <mesh scale={1.5}>
        <sphereGeometry args={[0.12, 20, 20]} />
        <meshBasicMaterial color={CYAN} transparent opacity={0.08} />
      </mesh>
    </group>
  );
}

function EnergyCurve({ radius = 2.8 }: { radius?: number }) {
  const ref = useRef<THREE.Group>(null);
  const curve = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 80; i++) {
      const a = (i / 80) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius * 0.52, Math.sin(a * 2) * 0.25));
    }
    return new THREE.CatmullRomCurve3(pts, true);
  }, [radius]);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z -= delta * 0.04;
  });
  return (
    <group ref={ref}>
      <mesh>
        <tubeGeometry args={[curve, 160, 0.012, 6, true]} />
        <meshBasicMaterial color={GREEN} transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

function SceneMotion({ progress }: { progress: number }) {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.elapsedTime;
    group.current.rotation.y = Math.sin(t * 0.08) * 0.08 + progress * 0.08;
    group.current.rotation.x = Math.sin(t * 0.05) * 0.025;
    group.current.position.z = -0.6 + Math.sin(t * 0.12) * 0.05;
  });

  const shift = (progress - 0.5) * 0.55;
  return (
    <group ref={group} position={[shift, 0, 0]}>
      <Orbit radius={2.45} tilt={0.62} speed={0.035} />
      <Orbit radius={3.05} tilt={-0.42} speed={-0.026} offset={0.8} />
      <Orbit radius={3.65} tilt={0.18} speed={0.018} offset={1.6} />
      <EnergyCurve radius={2.7} />
      <Node position={[-2.05, 0.72, 0.2]} scale={0.9} speed={0.28} phase={0.4} />
      <Node position={[1.75, 0.86, 0.35]} scale={0.75} speed={0.34} phase={1.8} />
      <Node position={[2.2, -0.65, -0.1]} scale={0.62} speed={0.3} phase={2.4} />
      <Node position={[-1.75, -0.7, 0.1]} scale={0.7} speed={0.25} phase={3.2} />
      <ParticleField />
    </group>
  );
}

export default function Commerce3D({ progress = 0 }: { progress?: number }) {
  return (
    <div className="commerce3d" aria-hidden="true">
      <Canvas
        dpr={[1, 1.25]}
        camera={{ position: [0, 0, 8], fov: 34 }}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance", preserveDrawingBuffer: false }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 4, 6]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-3, 1, 2]} intensity={1.8} color={GREEN} distance={8} />
        <SceneMotion progress={progress} />
      </Canvas>
    </div>
  );
}
