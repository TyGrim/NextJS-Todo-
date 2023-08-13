import Link from "next/link"
import DynamicNavBar from "./components/DynamicNavBar"
import { Hero } from "./components"

export default function Home() {

  return (
    <>
    <Hero />
      <h1>Home</h1>
      <Link href="/pricing">Pricing</Link>     
    </>
  )
}
