import { useThree } from "@react-three/fiber"
import { useDrag } from "@use-gesture/react"
import React, { useRef } from "react"
import { Mesh } from "three"

const Ball = () => {
  const ref = useRef<Mesh>(null)
  const { factor } = useThree((three) => three.viewport)
  const bind = useDrag(({ movement: [x, y] }) => {
    ref.current?.position.set(x / factor, -y / factor, 0)
  })
  return (
    <mesh {...(bind() as any)} ref={ref}>
      <sphereBufferGeometry />
      <meshBasicMaterial />
    </mesh>
  )
}

export default Ball
