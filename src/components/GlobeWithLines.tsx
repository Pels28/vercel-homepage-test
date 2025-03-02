"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function MovingLine({ start, end }: { start: [number, number, number]; end: [number, number, number] }) {
  const lineRef = useRef<THREE.Line>();

  useFrame(({ clock }) => {
    if (lineRef.current) {
      const progress = (clock.getElapsedTime() % 2) / 2;
      const vertices = new Float32Array([
        start[0], start[1], start[2],
        start[0] + (end[0] - start[0]) * progress,
        start[1] + (end[1] - start[1]) * progress,
        start[2] + (end[2] - start[2]) * progress,
      ]);
      (lineRef.current.geometry as THREE.BufferGeometry).setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    }
  });

  return (
    <line ref={lineRef }>
      <bufferGeometry />
      <lineBasicMaterial color="#3b82f6" />
    </line>
  );
}

function Globe() {
  const radius = 3;
  const points: [number, number, number][] = [
    [radius, 0, 0],
    [-radius, 0, 0],
    [0, radius, 0],
    [0, -radius, 0],
    [0, 0, radius],
    [0, 0, -radius],
  ];

  return (
    <>
      {/* Sphere (Globe) */}
      <mesh>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshBasicMaterial wireframe color="white" opacity={0.2} transparent />
      </mesh>

      {/* Moving Lines */}
      {points.map((start, idx) =>
        points.map((end, j) => idx < j && <MovingLine key={`${idx}-${j}`} start={start} end={end} />)
      )}
    </>
  );
}

export default function GlobeWithLines() {
  return (
    <Canvas className="absolute inset-0">
      <ambientLight />
      <Globe />
    </Canvas>
  );
}
