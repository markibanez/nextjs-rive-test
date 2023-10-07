'use client';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from "react";
import { Mesh } from 'three';

type BoxProps = {
  position: [number, number, number];
}

const Box = ({ position }: BoxProps) => {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<Mesh>(null!);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => ((meshRef.current.rotation.x) += delta));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      position={position}
      ref={meshRef}
      scale={active ? 0.5 : 0.125}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

export default Box;
