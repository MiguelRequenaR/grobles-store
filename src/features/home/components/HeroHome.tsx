
export default function HeroHome() {
  return (
    <main
      className="relative w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex flex-col items-center pt-30 md:pt-50 h-full text-center gap-4">
          <h1
          className="text-white text-5xl md:text-7xl font-bold uppercase" data-aos="fade-up">
            Presentamos <br /> Grobles - <span
            className="text-secondary">Store</span>
          </h1>
          <p
          className="text-white text-lg font-bold uppercase" data-aos="fade-up" data-aos-delay="100">
            Encuentra todo tipo de sitios web para tu negocio, <br /> modernas, personalizadas y optimizadas.
          </p>
          <div className="pt-5 flex flex-wrap justify-center gap-x-3 gap-y-3d uppercase" data-aos="zoom-in" data-aos-delay="200">
            <span
              className="text-white bg-primary px-2 py-1 border border-white rounded-full text-sm">
              Diseño centrado en SEO
            </span>
            <span
              className="text-white bg-primary px-2 py-1 border border-white rounded-full text-sm">
              Responsivo en todas las pantallas
            </span>
            <span
              className="text-white bg-primary px-2 py-1 border border-white rounded-full text-sm">
              Fácil de personalizar
            </span>
            <br />
            <span
              className="text-white bg-primary px-2 py-1 border border-white rounded-full text-sm">
              Precios accesibles
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
