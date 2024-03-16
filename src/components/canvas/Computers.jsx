import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { HemisphereLight } from "three";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf")

  return (
    <mesh scale={isMobile ? 0.5 : 0.75} position={isMobile ? [1, -2, -1.5] : [0, -3.25, -1.5]} receiveShadow>
      <primitive
        object={computer.scene}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState("")

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    setIsMobile(mediaQuery.matches)

    const handleChangeMedia = (event) => {
      console.log(event)
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener("change", handleChangeMedia)

    return () => {
      mediaQuery.removeEventListener("change", handleChangeMedia)
    }
  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <hemisphereLight intensity={0.85} groundColor="black" />
      <pointLight
        intensity={1}
        castShadow
        position={[0, 10, 0]} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadowMapSize={1024}
      />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />

    </Canvas>
  );
};

export default ComputersCanvas;