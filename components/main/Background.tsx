"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const Fireflies = (props: any) => {
  const ref: any = useRef();
  const [positions] = useState(() =>
    random.inSphere(new Float32Array(3000), { radius: 1.4 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.y += delta / 5;
  });

  return (
    <group rotation={[0, 0, 0]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#FFD700"
          size={0.007}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

const FloatingFirefliesCanvas: React.FC<{}> = () => (
  <div className="w-full h-auto fixed inset-0 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 1.5] }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.1} />
        <Fireflies />
      </Suspense>
    </Canvas>
  </div>
);

export default FloatingFirefliesCanvas;
