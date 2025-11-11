
export default function Fotter() {
  return (
    <footer
    className="bg-primary m-3 md:m-10 py-20 rounded-3xl">
      <div
      className="flex flex-col gap-4 items-center justify-center">
        <div className="flex items-center gap-2">
          <img src="/logoG.png" alt="logo" className="w-15 h-15"/>
          <h1
          className="text-white text-2xl md:text-4xl font-bold">Grobles Store</h1>
        </div>
        <p
        className="text-white text-center md:text-left md:text-lg">Un rama de Grobles Studio, dedicada a la creación de plantillas de sitios web para tu negocio, modernas, personalizadas y optimizadas.</p>
        <div
        className="pt-5">
          <h2
          className="text-white text-2xl font-bold text-center">Enlaces</h2>
          <ul
          className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-secondary px-5 py-3 rounded-3xl mt-5 font-bold">
            <li
            className="hover:text-white hover:bg-primary px-2 py-1 rounded-full transition-all duration-500 text-center">
              <a href="/">Templates</a>
            </li>
            <li
            className="hover:text-white transition-all duration-500 hover:bg-primary px-2 py-1 rounded-full text-center">
              <a href="#">Nosotros</a>
            </li>
            <li
            className="hover:text-white transition-all duration-500 hover:bg-primary px-2 py-1 rounded-full text-center">
              <a href="#">Ayuda</a>
            </li>
            <li
            className="hover:text-white transition-all duration-500 hover:bg-primary px-2 py-1 rounded-full text-center">
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
        <hr
        className="w-full border-dashed border-white my-10" />
        <div 
        className="flex flex-col md:flex-row items-center md:justify-between w-full gap-2 md:gap-0 px-10">
          <div className="text-white text-center md:text-left">
            © 2025 <span className="font-bold text-secondary">Grobles Store</span>. Todos los derechos reservados.
          </div>
          <div className="text-white text-center md:text-right">
            <span>
              Desarrollado por{" "}
              <a href="https://grobles.netlify.app" className="underline hover:text-secondary transition-all duration-300">
                <span className="font-bold text-white hover:text-secondary transition-all duration-300">Grobles Studio</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
