import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import MainLayout from "@/layout/MainLayout"
import Home from "@/features/home"
import Contact from "@/features/contact"
import TemplateDetail from "@/features/template-detail"
import ScrollToTop from "@/utils/ScrollToTop"
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      offset: 120,
      easing: 'ease-in-out',
    })
  })

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/template/:id" element={<TemplateDetail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
