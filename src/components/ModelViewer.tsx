
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PresentationControls, Environment, ContactShadows } from '@react-three/drei';
import { Suspense } from 'react';
import { SimpleRoom } from './models/SimpleRoom';

const ModelViewer = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-soft-sage/30 to-warm-cream">
      <Canvas shadows camera={{ position: [8, 8, 8], fov: 25 }}>
        <Suspense fallback={null}>
          <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[-1, 0.75]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
          >
            <SimpleRoom position={[0, -1, 0]} scale={1.5} />
          </PresentationControls>
          <Environment preset="apartment" />
          <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
