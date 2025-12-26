import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const links = [
    { label: "Templates", path: "/" },
    { label: "Nosotros", scrollTo: "about" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (link: typeof links[0], idx: number) => {
    setActiveIndex(idx);
    
    if (link.scrollTo) {
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(link.scrollTo!);
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
        const element = document.getElementById(link.scrollTo);
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
    } else if (link.path) {
      if (window.location.pathname === link.path) {
        scrollToTop();
      } else {
        navigate(link.path);
      }
    }
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 max-w-4xl mx-auto mt-4 md:mt-10 px-4 md:px-10 rounded-full"
      style={{
        background: "linear-gradient(90deg, var(--color-primary) 0%, #232323 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-2 md:px-0">
        <Link 
          to="/" 
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault();
              scrollToTop();
            }
          }}
        >
          <div className="flex items-center gap-2">
            <img src="/logoG.png" alt="logo" className="w-10 h-10 md:w-15 md:h-15"/>
            <h1 className="text-white text-base md:text-xl font-semibold">Grobles - Store</h1>
          </div>
        </Link>
        
        {/* Desktop nav y botón de contacto */}
        <div className="hidden md:flex items-center gap-4 text-lg">
          <nav>
            <ul className="text-white flex gap-6 font-semibold">
              {links.map((link, idx) => (
                <li
                  key={link.label}
                  className={`
                    transition-colors duration-500 cursor-pointer 
                    hover:text-secondary 
                    ${activeIndex === idx ? 'text-secondary' : ''}
                  `}
                  onClick={() => handleNavigation(link, idx)}
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </nav>
          <Link to="/contacto">
            <button
              className="bg-white border border-transparent uppercase py-2 px-4 rounded-full cursor-pointer font-extralight hover:bg-transparent hover:border-secondary hover:text-white transition-all duration-500">
              Contacto
            </button>
          </Link>
        </div>
        
        {/* Botón hamburguesa solo para móvil */}
        <button 
          className="md:hidden flex items-center justify-center text-white"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Menú móvil overlay */}
      <div
        className={`
          fixed top-0 left-0 w-full h-screen bg-primary z-50 flex flex-col transition-transform duration-500 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        {/* Header del menú móvil */}
        <div className="flex justify-between items-center p-6">
          <Link 
            to="/"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                scrollToTop();
              }
              setMenuOpen(false);
            }}
          >
            <div className="flex items-center gap-2">
              <img src="/logoG.png" alt="logo" className="w-10 h-10" />
              <h1 className="text-white text-base font-semibold">Grobles - Store</h1>
            </div>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white"
            aria-label="Cerrar menú"
          >
            <X className="w-7 h-7" />
          </button>
        </div>
        
        {/* Navegación móvil */}
        <nav className="flex-1 flex flex-col items-center justify-center px-6">
          <ul className="flex flex-col gap-8 text-white text-2xl font-semibold text-center">
            {links.map((link, idx) => (
              <li
                key={link.label}
                className={`
                  cursor-pointer transition-colors duration-300
                  hover:text-secondary 
                  ${activeIndex === idx ? 'text-secondary' : ''}
                `}
                onClick={() => {
                  handleNavigation(link, idx);
                  setMenuOpen(false);
                }}
              >
                {link.label}
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Botón de contacto móvil */}
        <div className="flex justify-center pb-10 px-6">
          <Link to="/contacto" className="w-full max-w-xs">
            <button
              className="w-full relative overflow-hidden bg-secondary px-8 py-3 rounded-full uppercase cursor-pointer border border-secondary group transition-colors duration-500 hover:text-white text-base font-bold"
              onClick={() => setMenuOpen(false)}
            >
              <span
                className="
                  absolute inset-0 
                  bg-primary
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform duration-500 ease-in-out pointer-events-none
                "
              />
              <span 
                className="relative z-10 transition-colors duration-500"
              >
                Contacto
              </span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
