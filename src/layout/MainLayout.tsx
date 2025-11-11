import { Outlet } from "react-router-dom"
import NavBar from "@/components/NavBar"
import Fotter from "@/components/Fotter"
import CallToAction from "@/components/CallToAction"

export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <CallToAction />
      <Fotter />
    </div>
  )
}
