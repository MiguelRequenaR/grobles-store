import { ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <main className="max-w-7xl mx-auto py-10 px-4 md:py-20" data-aos="fade-up">
      <div
        className="bg-primary border border-white rounded-3xl flex flex-col md:flex-row items-center justify-between p-5 md:p-10 gap-6 md:gap-0"
      >
        <div className="w-full md:w-2/3 space-y-4 md:space-y-4 text-center md:text-left">
          <span className="bg-black uppercase text-white px-3 py-2 rounded-full inline-block mx-auto md:mx-0">
            Proyecto personalizado
          </span>
          <h2 className="text-white text-2xl font-bold pt-4 md:pt-5 uppercase">
            Construya su sitio web o sistema <br className="hidden md:block" /> web desde cero
          </h2>
          <p className="text-gray-400 text-base uppercase">
            Cree un sitio web o sistema web único y personalizado con nuestro equipo <br className="hidden md:block" /> de expertos desde cero.
          </p>
        </div>
        <div className="w-full md:w-1/3 mt-6 md:mt-0 flex">
          <a href="https://www.groblestudio.com/contact" className="w-full bg-white text-primary border border-transparent px-4 py-2 rounded-full cursor-pointer hover:bg-transparent hover:text-white hover:border-white transition-all duration-500 flex items-center justify-center gap-2 uppercase">

            Consulta nuestro StartUp
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </main>
  )
}
