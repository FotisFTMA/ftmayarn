import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'; // Correct import from @react-three/drei
import { Model } from './Model.jsx'; // Your model import

function App() {
  return (
    <Canvas style={{ width: '100vw', height: '100vh', background: 'radial-gradient(circle, #1a1a1a, #000000)' }} camera={{ fov: 50, position: [0, 2, 6] }}>
      
      {/* Studio-like lighting with your specified positions */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[-5.7, -10, 0.5]} intensity={7} />
      <directionalLight position={[-1.3, 4.8, 0.8]} intensity={7} />
      <spotLight position={[-6.5, 5.5, -5.9]} angle={2.15} penumbra={1} intensity={0.7} />
      <directionalLight position={[0, -6.4, 0]} intensity={2} />

      {/* Your 3D Model */}
      <Model position={[0.7, -0.4, 0.5]} scale={0.4} rotation={[Math.PI / 120, 20.4, 0]} />

      {/* OrbitControls to allow full 360-degree rotation around the model */}
      <OrbitControls 
        enablePan={false} // Disable panning
        enableZoom={true} // Allow zooming
        maxPolarAngle={Math.PI * 2} // Full 360-degree freedom vertically (up/down)
        minPolarAngle={0} // Allow flipping by setting the correct value
        rotateSpeed={1} // Adjust rotation speed
        target={[0, 0, 0]} // Make sure the camera rotates around the model's center
        maxAzimuthAngle={Infinity} // No limit on horizontal rotation (left/right)
        minAzimuthAngle={-Infinity} // No limit on horizontal rotation (left/right)
      />
    </Canvas>
  );
}

export default App;
