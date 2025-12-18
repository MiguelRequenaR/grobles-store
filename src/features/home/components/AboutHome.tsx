import { ArrowRight } from "lucide-react"

export default function AboutHome() {
  return (
    <main
      className="py-20 px-4 md:px-0 max-w-7xl mx-auto"
      id="about"
      >
      <div className="flex flex-col gap-4 items-center justify-center">
        <span className="bg-black text-white px-3 py-2 rounded-full inline-block mx-auto md:mx-0" data-aos="fade-up">
          Sobre Nosotros
        </span>
        <h2
          className="text-white text-2xl md:text-4xl font-bold text-center" data-aos="fade-up" data-aos-delay="100">
          Somos una pequeña Startup dedicada al desarrollo de software, <br /> parte de <span className="text-secondary">Grobles Studio</span>
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10">
          <div className="bg-primary p-10 rounded-3xl border border-white space-y-4" data-aos="fade-up" data-aos-delay="200">
            <h3
              className="text-white text-2xl font-bold">
              Nuestra misión
            </h3>
            <p
              className="text-white">
              Nuestra misión es crear software de calidad para nuestros clientes, con un enfoque en la usabilidad y la eficiencia.
            </p>
          </div>
          <div className="bg-primary p-10 rounded-3xl border border-white space-y-4" data-aos="fade-up" data-aos-delay="300">
            <h3
              className="text-white text-2xl font-bold">
              Nuestra visión
            </h3>
            <p
              className="text-white">
              Nuestra visión es ser una empresa líder en el desarrollo de software, con un enfoque en la usabilidad y la eficiencia.
            </p>
          </div>
          <div className="bg-primary p-10 rounded-3xl border border-white space-y-4" data-aos="fade-up" data-aos-delay="400">
            <h3
              className="text-white text-2xl font-bold">
              Nuestros enfoque
            </h3>
            <p
              className="text-white">
              Nuestros enfoque es crear software de calidad para nuestros clientes, con un enfoque en la usabilidad y la eficiencia.
            </p>
          </div>
        </div>
        <a href="https://groblestudio.com" data-aos="fade-up">
          <button
            className="bg-primary text-white px-4 py-2 rounded-full mx-auto md:mx-0 border border-white mt-10 flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-all duration-500 cursor-pointer">
            Somos parte de Grobles Studio
            <ArrowRight className="w-4 h-4" />
          </button>
        </a>
      </div>
    </main>
  )
}
