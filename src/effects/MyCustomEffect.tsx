import { Uniform, Vector3 } from "three"
import { BlendFunction, Effect } from "postprocessing"
import fragmentShader from "./MyCustomEffect.frag.glsl"
import { forwardRef, useMemo } from "react"

class MyCustomEffectImpl extends Effect {
  constructor() {
    super("CustomEffect", fragmentShader, {
      blendFunction: BlendFunction.Normal,
      uniforms: new Map([["weights", new Uniform(new Vector3())]]),
    })
  }
}

const MyCustomEffect = forwardRef((props, ref) => {
  const effect = useMemo(() => new MyCustomEffectImpl(), [])
  return <primitive ref={ref} object={effect} dispose={null} />
})

export default MyCustomEffect
