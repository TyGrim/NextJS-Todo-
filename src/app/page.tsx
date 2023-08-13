import Link from "next/link"
import DynamicNavBar from "./components/DynamicNavBar"

export default function Home() {

  return (
    <>
      <h1>Home</h1>
      <Link href="/pricing">Pricing</Link>     
    </>
  )
}
