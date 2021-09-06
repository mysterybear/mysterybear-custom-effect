import { BlendFunction, Effect } from "postprocessing"
import { forwardRef, useMemo } from "react"
import fragmentShader from "./MyCustomEffect.frag.glsl"

class MyCustomEffectImpl extends Effect {
  constructor() {
    super("CustomEffect", fragmentShader, {
      blendFunction: BlendFunction.NORMAL,
      uniforms: new Map([]),
    })
  }
}

const MyCustomEffect = forwardRef((props, ref) => {
  const effect = useMemo(() => new MyCustomEffectImpl(), [])
  return <primitive ref={ref} object={effect} dispose={null} />
})

export default MyCustomEffect
