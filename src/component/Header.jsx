import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300
          ${scrolled ? "bg-header text-white" : "bg-transparent"}
        `}
      >
        <div className="max-w-7xl mx-auto px-2 md:px-6">
          <div className="flex items-center justify-between h-[78px]">

            <img
              src="/logo.png"
              alt="Logo"
              className="w-50 object-contain"
            />

            <nav className="hidden md:flex items-center gap-10 text-white font-medium">
              <a className="nav-link" href="#home">Home</a>
              <a className="nav-link" href="#about">About Us</a>
              <a className="nav-link" href="#services">Services</a>
              <a className="nav-link" href="#locations">Contact</a>
              <a className="nav-link" href="#terms">Terms & Conditions</a>
            </nav>

            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/share/181UtAbQWR/" target="_blank" className="social-icon hidden md:flex"><FaFacebookF /></a>
              <a className="social-icon hidden md:flex" href="https://www.instagram.com/mocktail.in?igsh=MWl5Z3dlbmRrczlpeQ==" target="_blank"><FaInstagram /></a>

              <button
                className="md:hidden text-white text-xl"
                onClick={() => setMenuOpen(true)}
              >
                <FaBars />
              </button>
            </div>

          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-999 transition-opacity duration-300
          ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-xs bg-black text-white
            transform transition-transform duration-300
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setMenuOpen(false)}>
              <FaTimes size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 px-6 text-lg font-medium">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#locations" onClick={() => setMenuOpen(false)}>Contact</a>
            <a href="#terms" onClick={() => setMenuOpen(false)}>Terms & Conditions</a>
          </nav>


          <div className="flex gap-4 px-6 mt-8">
            <a href="https://www.facebook.com/share/181UtAbQWR/" target="_blank" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/mocktail.in?igsh=MWl5Z3dlbmRrczlpeQ==" className="social-icon" target="_blank" >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
