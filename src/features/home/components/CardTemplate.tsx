import { Link } from "react-router-dom"
import Template1 from "@/assets/images/trestaurante.png"
import Template2 from "@/assets/images/ttransporte.png"
import Template3 from "@/assets/images/thotel.jpg"

const templates = [
  {
    id: 1,
    name: "Foodie - Restaurante",
    price: 350,
    description: "Template para restaurantes, con un diseño moderno y diversas secciones.",
    image: Template1,
  },
  {
    id: 2,
    name: "Grupo HC - Transporte",
    price: 300,
    description: "Template para transportes, con un diseño moderno y diversas secciones.",
    image: Template2,
  },
  {
    id: 3,
    name: "Hotel - Hotel",
    price: 350,
    description: "Template para hoteles, con un diseño moderno y diversas secciones.",
    image: Template3,
  }
]

export default function CardTemplate() {
  return (
    <main
    className="py-20 px-4 md:px-0"
    data-aos="fade-up" data-aos-delay="300"
    id="templates">
      <div 
      className="max-w-7xl mx-auto">
        <div
        className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {templates.map((template) => (
            <Link 
              key={template.id} 
              to={`/template/${template.id}`}
              className="space-y-4 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={template.image} 
                  alt={template.name}
                  className="rounded-2xl transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl" />
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-white text-2xl font-bold group-hover:text-secondary transition-colors duration-300">{template.name}</h2>
                <span className="text-white text-xl font-bold bg-primary border border-white px-2 py-1 rounded-full group-hover:border-secondary group-hover:text-secondary transition-colors duration-300">S/.{template.price}</span>
              </div>
              <p 
              className="text-white text-lg">{template.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
