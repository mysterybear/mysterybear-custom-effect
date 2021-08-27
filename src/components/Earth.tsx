import { useSpring } from "@react-spring/three"
import { useFrame, useThree } from "@react-three/fiber"
import { useDrag } from "@use-gesture/react"
import { pipe } from "fp-ts/lib/function"
import { useRef } from "react"
import "../materials/BasicShaderMaterial"
import {
  AnimatedBasicShaderMaterial,
  BasicShaderMaterialImpl,
} from "../materials/BasicShaderMaterial"

const Earth = () => {
  const ref = useRef<BasicShaderMaterialImpl>(null)

  const [{ offset }, spring] = useSpring(() => ({
    offset: [0, 0],
    immediate: true,
  }))

  const { factor } = useThree((three) => three.viewport)

  const bind = useDrag(({ offset: [x, y] }) => {
    const offset = pipe([x, y] as const, ([x, y]) => [-x / factor, y / factor])
    spring.start({ offset })
  })

  useFrame(({ clock }) => {
    const material = ref.current
    if (!material) return
    if (material.uniforms?.u_time) {
      material.uniforms.u_time.value = clock.getElapsedTime()
    }
  })

  return (
    <mesh {...(bind() as any)}>
      <planeBufferGeometry args={[4, 4]} />
      <AnimatedBasicShaderMaterial ref={ref} uniforms-u_offset-value={offset} />
    </mesh>
  )
}

export default Earth
