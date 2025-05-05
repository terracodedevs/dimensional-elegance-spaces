
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { SimpleRoom } from './models/SimpleRoom';

const ModelViewer = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-soft-sage/30 to-warm-cream">
      <Canvas shadows camera={{ position: [8, 8, 8], fov: 25 }}>
        <Suspense fallback={null}>
          <SimpleRoom position={[0, -1, 0]} scale={1.5} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.8} castShadow />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
