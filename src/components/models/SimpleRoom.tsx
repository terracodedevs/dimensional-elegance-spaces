
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function SimpleRoom(props) {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        (state.mouse.x * Math.PI) / 20,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        (state.mouse.y * Math.PI) / 20,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef} {...props}>
      {/* Floor */}
      <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#F5F2EA" />
      </mesh>
      
      {/* Back Wall */}
      <mesh position={[0, 2, -4]} receiveShadow>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial color="#F5F2EA" />
      </mesh>
      
      {/* Side Wall */}
      <mesh position={[-4, 2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial color="#F5F2EA" />
      </mesh>
      
      {/* Sofa */}
      <group position={[0, 0.5, -2.5]}>
        <mesh castShadow>
          <boxGeometry args={[3, 0.5, 1]} />
          <meshStandardMaterial color="#2A2D45" />
        </mesh>
        <mesh position={[0, 0.5, -0.4]} castShadow>
          <boxGeometry args={[3, 0.5, 0.2]} />
          <meshStandardMaterial color="#2A2D45" />
        </mesh>
        <mesh position={[-1.4, 0.5, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
          <boxGeometry args={[1, 0.5, 0.2]} />
          <meshStandardMaterial color="#2A2D45" />
        </mesh>
        <mesh position={[1.4, 0.5, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
          <boxGeometry args={[1, 0.5, 0.2]} />
          <meshStandardMaterial color="#2A2D45" />
        </mesh>
      </group>
      
      {/* Coffee Table */}
      <mesh position={[0, 0.3, -0.5]} castShadow>
        <boxGeometry args={[1.5, 0.1, 0.8]} />
        <meshStandardMaterial color="#B8C4BB" />
      </mesh>
      <mesh position={[0, 0.15, -0.5]} castShadow>
        <boxGeometry args={[0.1, 0.3, 0.1]} />
        <meshStandardMaterial color="#4A0404" />
      </mesh>
      
      {/* Chair */}
      <group position={[2, 0.5, -1.5]} rotation={[0, -Math.PI / 4, 0]}>
        <mesh castShadow>
          <boxGeometry args={[1, 0.1, 1]} />
          <meshStandardMaterial color="#D4AF37" />
        </mesh>
        <mesh position={[0, 0.5, -0.4]} castShadow>
          <boxGeometry args={[1, 0.8, 0.1]} />
          <meshStandardMaterial color="#D4AF37" />
        </mesh>
      </group>
    </group>
  );
}
