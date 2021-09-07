import { BlendFunction, Effect } from "postprocessing"
import { forwardRef, useMemo } from "react"
import fragmentShader from "./FishEyeEffect.frag.glsl"

class FishEyeEffectImpl extends Effect {
  constructor() {
    super("FishEyeEffect", fragmentShader, {
      blendFunction: BlendFunction.NORMAL,
      uniforms: new Map([]),
    })
  }
}

const FishEyeEffect = forwardRef((props, ref) => {
  const effect = useMemo(() => new FishEyeEffectImpl(), [])
  return <primitive ref={ref} object={effect} dispose={null} />
})

export default FishEyeEffect
