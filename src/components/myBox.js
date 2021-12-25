import React, { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Box = (props) => {
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    const mesh = useRef()
    useFrame((state, delta) => { mesh.current.rotation.y += 0.01 })
    return (
        <mesh
            {...props}
            ref={mesh}
            onClick={() => { setActive(!active) }}
            onPointerOver={() => { setHover(true) }}
            onPointerOut={() => { setHover(false) }}
        >
            <boxGeometry args={[1, 1, 1]}></boxGeometry>
            <meshStandardMaterial color={hovered ? 'red' : 'orange'}></meshStandardMaterial>
        </mesh>
    )
}

export default Box