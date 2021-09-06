import MyCustomEffect from "@/effects/MyCustomEffect"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { EffectComposer } from "@react-three/postprocessing"
import { styled } from "stitches.config"
import tw from "twin.macro"
import Image from "./Image"

const FullScreenDiv = styled("div", {
  ...tw`fixed w-full h-full`,
  ...tw`flex justify-center items-center`,
  "& canvas": {
    touchAction: "none",
    zIndex: 10,
  },
})

const Content = styled("div", {
  ...tw`absolute inline-block`,
})
const imgSrc = `https://images.unsplash.com/photo-1627926076810-0c5d5cdcca61?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDE0OTE0OA&ixlib=rb-1.2.1&q=80&w=800`

const App = () => {
  return (
    <FullScreenDiv>
      <Canvas onCreated={({ gl }) => void gl.setClearColor("#494383", 1.0)}>
        <Image src={imgSrc} />
        <EffectComposer>
          <MyCustomEffect />
        </EffectComposer>
        <OrbitControls />
      </Canvas>
    </FullScreenDiv>
  )
}

export default App
