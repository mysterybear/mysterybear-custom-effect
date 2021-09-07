import { BlendFunction, Effect } from "postprocessing"
import { forwardRef, useMemo } from "react"
import { Uniform } from "three"
import fragmentShader from "./MyCustomEffect.frag.glsl"
import vertexShader from "./MyCustomEffect.vert.glsl"

class MyCustomEffectImpl extends Effect {
  constructor({ strength = 0.5, height = 140, cylindricalRatio = 2.0 }) {
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
  height?: number
  cylindricalRatio?: number
}

const MyCustomEffect = forwardRef<JSX.IntrinsicElements["primitive"], Props>(
  (props, ref) => {
    const effect = useMemo(() => new MyCustomEffectImpl(props), [props])
    return <primitive ref={ref} object={effect} dispose={null} />
  }
)

export default MyCustomEffect
