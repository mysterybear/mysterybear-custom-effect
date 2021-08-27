import { Canvas } from "@react-three/fiber"
import { styled } from "stitches.config"
import tw from "twin.macro"
import "../materials/BasicShaderMaterial"
import Ball from "./Ball"
import Earth from "./Earth"

const FullScreenDiv = styled("div", {
  ...tw`fixed w-full h-full`,
  "& canvas": {
    touchAction: "none",
  },
})

const App = () => {
  return (
    <FullScreenDiv>
      <Canvas>
        <Earth />
      </Canvas>
    </FullScreenDiv>
  )
}

export default App
