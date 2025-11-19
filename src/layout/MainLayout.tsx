import { Outlet } from "react-router-dom"
import NavBar from "@/components/NavBar"
import Fotter from "@/components/Fotter"
import CallToAction from "@/components/CallToAction"
import { useLenis } from "@/hooks/useLenis"

export default function MainLayout() {
  useLenis();
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
