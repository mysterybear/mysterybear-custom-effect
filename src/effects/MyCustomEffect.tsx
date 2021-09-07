import { useThree } from "@react-three/fiber"
import { BlendFunction, Effect } from "postprocessing"
import { forwardRef, useMemo } from "react"
import { Uniform, MathUtils, PerspectiveCamera } from "three"
import fragmentShader from "./MyCustomEffect.frag.glsl"
import vertexShader from "./MyCustomEffect.vert.glsl"

class MyCustomEffectImpl extends Effect {
  constructor({ strength = 0.5, height = 0.0, cylindricalRatio = 2.0 }) {
    super("CustomEffect", fragmentShader, {
      blendFunction: BlendFunction.NORMAL,
      uniforms: new Map([
        ["strength", new Uniform(strength)],
        ["height", new Uniform(height)],
        ["cylindricalRatio", new Uniform(cylindricalRatio)],
      ]),
      vertexShader,
    })
  }
}

type Props = {
  strength?: number
  horizontalFOV?: number
  cylindricalRatio?: number
}

const MyCustomEffect = forwardRef<JSX.IntrinsicElements["primitive"], Props>(
  ({ horizontalFOV = 140, cylindricalRatio = 2.0, strength = 0.5 }, ref) => {
    const camera = useThree((three) => three.camera) as PerspectiveCamera
    console.log(camera.aspect, "aspect")
    const height = useMemo(
      () => Math.tan(MathUtils.degToRad(horizontalFOV) / 2) / camera.aspect,
      [horizontalFOV]
    )
    const effect = useMemo(
      () => new MyCustomEffectImpl({ height, cylindricalRatio, strength }),
      [height, cylindricalRatio, strength]
    )
    return <primitive ref={ref} object={effect} dispose={null} />
  }
)

export default MyCustomEffect
