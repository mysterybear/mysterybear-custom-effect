import { BlendFunction, Effect } from "postprocessing"
import { forwardRef, useMemo } from "react"
import fragmentShader from "./GriddyEffect.frag.glsl"

class GriddyEffectImpl extends Effect {
  constructor() {
    super("GriddyEffect", fragmentShader, {
      blendFunction: BlendFunction.NORMAL,
      uniforms: new Map([]),
    })
  }
}

const GriddyEffect = forwardRef((props, ref) => {
  const effect = useMemo(() => new GriddyEffectImpl(), [])
  return <primitive ref={ref} object={effect} dispose={null} />
})

export default GriddyEffect
