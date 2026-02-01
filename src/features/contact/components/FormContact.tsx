import { Mail, Phone } from "lucide-react"
import { whatsappForm } from "@/utils/whatsappMessage"

export default function FormContact() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const form = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    }
    whatsappForm(form);
    e.currentTarget.reset();
  }
  return (
    <main className="py-20 px-4 md:px-0 max-w-2xl mx-auto">
      {/* Encabezado */}
      <div className="text-center flex flex-col items-center space-y-5 pt-20" data-aos="fade-up">
        <span className="bg-black text-white px-5 py-2 rounded-full font-semibold shadow-lg tracking-wider text-base mb-2 inline-block">
          Contáctenos
        </span>
        <h2 className="text-white text-3xl font-bold text-center">
          Comuníquese con nosotros
        </h2>
        <p className="text-gray-300 text-base max-w-2xl text-center">
          ¿Tienes preguntas o deseas hablar más sobre tu proyecto? Completa el formulario o usa las opciones de contacto para ponerte en contacto con nuestro equipo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10" data-aos="fade-up" data-aos-delay="100">
        <div className="flex items-center gap-4 bg-secondary/50 rounded-2xl p-5">
          <div className="bg-secondary/30 rounded-full p-3">
            <Mail className="w-9 h-9 text-secondary" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-2">Correo Electrónico</h4>
            <a
              href="mailto:contacto@groblestudio.com"
              className="text-gray-200 hover:text-secondary transition-colors duration-300 underline break-all"
            >
              contacto@groblestudio.com
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-secondary/50 rounded-2xl p-5">
          <div className="bg-secondary/30 rounded-full p-3">
            <Phone className="w-9 h-9 text-secondary" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-2">Llámenos</h4>
            <a
              href="tel:+51901617809"
              className="text-gray-200 hover:text-secondary transition-colors duration-300 underline"
            >
              (+51) 901 617 809
            </a>
          </div>
        </div>
      </div>

      <form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 bg-black/60 rounded-2xl p-8 shadow-xl" data-aos="fade-up" data-aos-delay="200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="name" className="font-semibold text-white mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="rounded-xl px-4 py-2 bg-[#242424] text-white border-none outline-none focus:ring-2 focus:ring-secondary transition-all duration-200"
              placeholder="Tu nombre completo"
              autoComplete="off"
              required
            />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <label htmlFor="email" className="font-semibold text-white mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="rounded-xl px-4 py-2 bg-[#242424] text-white border-none outline-none focus:ring-2 focus:ring-secondary transition-all duration-200"
              placeholder="tucorreo@dominio.com"
              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="font-semibold text-white mb-1">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            className="rounded-xl px-4 py-2 bg-[#242424] text-white border-none outline-none focus:ring-2 focus:ring-secondary transition-all duration-200 min-h-[120px] resize-none"
            placeholder="¿En qué podemos ayudarte?"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-3 bg-secondary hover:bg-transparent hover:text-secondary border border-secondary text-primary font-light py-3 px-6 rounded-full shadow-lg transition-all duration-300 text-lg tracking-wide uppercase cursor-pointer"
        >
          Enviar mensaje
        </button>
      </form>
    </main>
  )
}
