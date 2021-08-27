import dynamic from "next/dynamic"

const App = dynamic(() => import("@/components/App"), { ssr: false })

const IndexPage = () => <App />

export default IndexPage
