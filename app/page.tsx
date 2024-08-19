import Image from "next/image"
import PropertyValuation from "./components/PropertyValuation"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PropertyValuation />
    </main>
  )
}
