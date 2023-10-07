'use client';

import { Canvas } from '@react-three/fiber';
import Box from './box';

const ThreeJsClientPage = () => {
  return (
    <Canvas
      style={{ height: '100vh', width: '100vw' }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      {Array.from({ length: 1200 }).map((_, i) => (
        <Box
          key={i}
          position={[Math.random() * 10 - 5, Math.random() * 10 - 5, 0]}
        />
      ))}
    </Canvas>
  );
};

export default ThreeJsClientPage;
