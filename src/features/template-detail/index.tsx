import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { whatsappBuy } from "@/utils/whatsappMessage";
import Template1Desktop from "@/assets/images/re1.jpg";
import Template1Mobile from "@/assets/images/re2.jpg";
import Template2Desktop from "@/assets/images/tra1.jpg";
import Template2Mobile from "@/assets/images/tra2.jpg";
import Template3Desktop from "@/assets/images/ho1.jpg";
import Template3Mobile from "@/assets/images/ho2.jpg";
import Template4Desktop from "@/assets/images/PanaderiaPC.png";
import Template4Mobile from "@/assets/images/PanaderiaPhone.png"

const templates = [
  {
    id: 1,
    name: "Foodie - Restaurante",
    price: 650,
    description: "Página de destino para restaurantes",
    fullDescription: "Template profesional diseñado específicamente para restaurantes modernos. Incluye secciones para menú, reservas, galería de fotos y testimonios de clientes.",
    imageDesktop: Template1Desktop,
    imageMobile: Template1Mobile,
    infoTemplate: "Foodie es un template profesional diseñado específicamente para restaurantes modernos. Combina un diseño moderno y minimalista con una interfaz intuitiva y fácil de usar, y listo para mostrar  los servicios de su marca e impulsarlo en línea.",
    previewUrl: "https://restaurante-app-woad.vercel.app/",
    useCases: ["Restaurante", "Café", "Bar", "Comida rápida"],
  },
  {
    id: 2,
    name: "Grupo HC - Transporte",
    price: 600,
    description: "Página de destino para empresas de transporte",
    fullDescription: "Template completo para empresas de transporte y logística. Diseño profesional con secciones para servicios, flota, cotizaciones y seguimiento de envíos.",
    imageDesktop: Template2Desktop,
    imageMobile: Template2Mobile,
    infoTemplate: "Grupo HC es un template profesional diseñado específicamente para empresas de transporte y logística. Combina un diseño moderno y minimalista con una interfaz intuitiva y fácil de usar, y listo para mostrar  los servicios de su marca e impulsarlo en línea.",
    previewUrl: "https://transporte-app-eta.vercel.app/",
    useCases: ["Transporte", "Logística", "Envíos", "Carga"],
  },
  {
    id: 3,
    name: "Oz Resort",
    price: 650,
    description: "Página de destino para hoteles",
    fullDescription: "Template completo para hoteles y alojamientos. Diseño profesional con secciones para servicios, habitaciones y reservas en línea.",
    imageDesktop: Template3Desktop,
    imageMobile: Template3Mobile,
    infoTemplate: "Oz Resort es un template profesional diseñado específicamente para hoteles. Combina un diseño moderno y minimalista con una interfaz intuitiva y fácil de usar, y listo para mostrar  los servicios de su marca e impulsarlo en línea.",
    previewUrl: "https://oz-resort.vercel.app/",
    useCases: ["Hotel", "Alojamiento", "Turismo", "Reservas"],
  },
  {
    id: 4,
    name: "Skippy - Panadería",
    price: 1200,
    description: "Sistema Ecommerce para panaderías",
    fullDescription: "Sistema Ecommerce completo para panaderías. Diseño profesional con secciones completas tipo landing page, y sistema de gestión.",
    imageDesktop: Template4Desktop,
    imageMobile: Template4Mobile,
    infoTemplate: "Sistema Ecommerce  para la gestión de productos y ventas. Con catálogo de productos, carrito de compras, pedidos por whatsapp, barra de busqueda, y landing page incorporada. Para la fácil gestión de su marca.",
    previewUrl: "https://caramba-panaderia.vercel.app/",
    useCases : ["Ecommerce", "Panadería", "Gestión de Pedidos", "Gestión de Productos"]
  }
];

export default function TemplateDetail() {
  const { id } = useParams();
  const template = templates.find(t => t.id === Number(id));

  const handleBuyClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (template) {
      whatsappBuy({
        templateName: template.name,
        message: "",
      });
    }
  };

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold mb-4">Template no encontrado</h1>
          <Link to="/" className="text-secondary hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="py-20 px-4 md:px-8 lg:px-16 pt-30 md:pt-40">
      <div className="max-w-7xl mx-auto">
        {/* Botón volver */}
        <Link
          to="/#templates"
          className="inline-flex items-center gap-2 text-white hover:text-secondary transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver a templates
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna izquierda - Imágenes */}
          <div className="space-y-8">
            {/* Imagen principal - Desktop */}
            <div
              className="rounded-3xl overflow-hidden"
              data-aos="fade-right"
            >
              <img
                src={template.imageDesktop}
                alt={template.name}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>

            {/* Imagen móvil */}
            <div
              className="rounded-3xl overflow-hidden"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={template.imageMobile}
                alt={`${template.name} - Vista móvil`}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            {/* Información adicional */}
            <div className="bg-primary border border-white/30 rounded-3xl p-6 space-y-3">
              <h4 className="text-white text-lg font-semibold">Acerca de esta plantilla</h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                {template.infoTemplate}
              </p>
            </div>
          </div>


          {/* Columna derecha - Información */}
          <div className="space-y-8 lg:sticky lg:top-34 lg:self-start lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto" data-aos="fade-left">
            {/* Header con badge y precio */}
            <div className="flex items-center gap-4">

              <span className="text-white text-3xl font-bold">
                S/.{template.price}
              </span>
            </div>

            {/* Título y descripción */}
            <div className="space-y-4">
              <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                {template.name}
              </h1>
              <p className="text-gray-400 text-xl">
                {template.description}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                {template.fullDescription}
              </p>
            </div>

            {/* Botones de acción */}
            <div className="space-y-4">
              <a
                href={template.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-transparent border-2 border-white text-white px-6 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-semibold text-lg"
              >
                Vista previa en vivo
                <ExternalLink className="w-5 h-5" />
              </a>

              <button
                onClick={handleBuyClick}
                className="flex items-center border border-transparent justify-center gap-2 w-full bg-white text-black px-6 py-4 rounded-full hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 font-semibold text-lg cursor-pointer"
              >
                Comprar ahora - S/.{template.price}
              </button>
            </div>

            {/* Caso de uso */}
            <div className="space-y-4">
              <h3 className="text-white text-2xl font-bold">Caso de uso</h3>
              <div className="flex flex-wrap gap-3">
                {template.useCases.map((useCase, index) => (
                  <span
                    key={index}
                    className="bg-primary border border-white/30 text-white px-6 py-2 rounded-full text-base"
                  >
                    {useCase}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

