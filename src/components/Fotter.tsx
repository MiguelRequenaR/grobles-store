import { useNavigate } from "react-router-dom"

export default function Fotter() {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToAbout = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('about');
        if (element) {
          const navbarHeight = 100;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById('about');
      if (element) {
        const navbarHeight = 100;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleNavigateToHome = () => {
    if (window.location.pathname === '/') {
      scrollToTop();
    } else {
      navigate('/');
    }
  };

  const handleNavigateToContact = () => {
    navigate('/contacto');
  }

  return (
    <footer
    className="bg-primary m-3 md:m-10 py-15 rounded-3xl">
      <div
      className="flex flex-col gap-4 items-center justify-center">
        <div className="flex items-center gap-2">
          <img src="/grobleStoreWhite.png" alt="logo" className="md:w-fit h-20"/>
        </div>
        <p
        className="text-white text-center md:text-left md:text-lg mx-4 md:mx-0 uppercase">Un rama de Grobles Studio, dedicada a la creación sitios web para tu negocio, modernas, personalizadas y optimizadas.</p>
        <div
        className="pt-5">
          <h2
          className="text-white text-2xl font-bold text-center uppercase">Enlaces</h2>
          <ul
          className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-secondary px-5 py-3 rounded-3xl mt-5">
            <li
            className="hover:text-white hover:bg-primary px-2 py-1 rounded-full transition-all duration-500 text-center cursor-pointer uppercase text-sm md:text-base"
            onClick={handleNavigateToHome}>
              Templates
            </li>
            <li
            className="hover:text-white transition-all duration-500 hover:bg-primary px-2 py-1 rounded-full text-center cursor-pointer uppercase text-sm md:text-base"
            onClick={handleNavigateToAbout}>
              Nosotros
            </li>
            <li
            className="hover:text-white transition-all duration-500 hover:bg-primary px-2 py-1 rounded-full text-center cursor-pointer uppercase text-sm md:text-base"
            onClick={handleNavigateToContact}>
              Contacto
            </li>
          </ul>
        </div>
        <hr
        className="w-full border-dashed border-white my-10" />
        <div 
        className="flex flex-col md:flex-row items-center md:justify-between w-full gap-2 md:gap-0 px-10">
          <div className="text-white text-center md:text-left uppercase">
            © 2026 <span className="font-bold text-secondary">Grobles Store</span>. Todos los derechos reservados.
          </div>
          <div className="text-white text-center md:text-right uppercase">
            <span>
              Desarrollado por{" "}
              <a href="https://groblestudio.com" className="underline hover:text-secondary transition-all duration-300">
                <span className="font-bold text-white hover:text-secondary transition-all duration-300">Grobles Studio</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
