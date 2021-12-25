import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const Box = (props) => {
  const mesh = useRef()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.01
  })
  return (
    <mesh {...props} ref={mesh}
      onPointerOver={e => { setHover(true) }}
      onPointerOut={e => { setHover(false) }}
      onClick={e => { setActive(active => !active) }}
      scale={active ? 1.5 : 1}
    >
      <boxGeometry args={[1, 1, 1]}></boxGeometry>
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'}></meshStandardMaterial>
    </mesh>
  )
}



const App = () => {
  return (<>
    <Canvas>
      <ambientLight></ambientLight>
      <pointLight />
      <Box position={[-1, 0, 0]}></Box>
      <Box position={[1, 0, 0]}></Box>
    </Canvas>
  </>)
}

export default App