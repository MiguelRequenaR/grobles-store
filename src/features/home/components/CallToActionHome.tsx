import { CheckCircle, CircleAlert } from "lucide-react"

export default function CallToActionHome() {
  return (
    <main
    className="py-20 px-4 md:px-0" data-aos="fade-up">
      <div
      className="max-w-7xl mx-auto">
        <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-primary p-10 rounded-3xl border border-white">
          <div
          className="space-y-4">
            <h3
            className="text-white text-2xl font-bold">Manténgase actualizado con nosotros</h3>
            <p
            className="text-gray-400 text-base">
              Forma parte de nuestra comunidad y mantente actualizado con noticias exclusivas.
            </p>
            <div>
              <div
              className="flex items-center gap-2">
                <CheckCircle
                className="text-secondary" />
                <span 
                className="text-white text-base">Lanzamiento de nuevas sitios web</span>
              </div>
              <div
              className="flex items-center gap-2">
                <CheckCircle
                className="text-secondary" />
                <span 
                className="text-white text-base">Descuentos y ofertas</span>
              </div>
              <div
              className="flex items-center gap-2">
                <CheckCircle
                className="text-secondary" />
                <span 
                className="text-white text-base">Actualizaciones importantes</span>
              </div>
            </div>
          </div>
          <div
          className="flex flex-col gap-4 items-center justify-center">
            <div className="flex flex-col md:flex-row gap-2 w-full">
              <input
                type="text"
                placeholder="Correo electrónico"
                className="w-full border border-white rounded-full px-4 py-2 text-white"
              />
              <button
                className="bg-white text-primary border border-transparent px-4 py-2 rounded-full whitespace-nowrap cursor-pointer hover:bg-transparent hover:text-white hover:border-white transition-all duration-500"
              >
                Únete ahora
              </button>
            </div>
            <span
            className="flex items-center gap-2 text-white text-sm">
              <CircleAlert
              className="text-secondary" />
              ¡Sin spam, solo actualizaciones genuinas!
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
