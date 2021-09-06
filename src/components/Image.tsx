import {
  MeshProps,
  PlaneBufferGeometryProps,
  useLoader,
} from "@react-three/fiber"
import React, { Suspense } from "react"
import { DoubleSide, TextureLoader } from "three"

type Props = MeshProps & {
  src: string
  width?: number
  height?: number
}

const ImageBase = ({
  src,
  width = 4,
  height = 3,
  children,
  ...rest
}: Props) => {
  const texture = useLoader(TextureLoader, src)
  return (
    <mesh {...rest}>
      <planeBufferGeometry args={[width, height]} />
      <meshBasicMaterial map={texture} side={DoubleSide} />
      {children}
    </mesh>
  )
}

const Image = (props: Props) => (
  <Suspense fallback={null}>
    <ImageBase {...props} />
  </Suspense>
)

export default Image
