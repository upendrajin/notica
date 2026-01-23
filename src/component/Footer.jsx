import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-wrapper relative">

      <div className="web-wave"></div>

      <div className="max-w-5xl mx-auto px-2 md:px-6 pt-20 pb-10 text-center">

        <img
          src="/logo.png"
          alt="Notica Logo"
          className="mx-auto h-24 mb-10"
        />

        <p className="text-normal font-medium mb-6" style={{ color: "var(--color-w-1)" }}>
          Surat Food N Beverage Pvt. Ltd.
        </p>

        <p className="footer-text" style={{ color: "var(--color-w-2)" }}>
          shop_17,star residency rajvadi party plot, Sweet Home Society
        </p>
        <p className="footer-text" style={{ color: "var(--color-w-2)" }}>
          Amroli, Surat, Gujarat 394107
        </p>
        <p className="footer-text mt-4" style={{ color: "var(--color-w-2)" }}>
          84694 64739
        </p>

        <div className="flex justify-center gap-4 mt-10 ">
          <a href="https://www.facebook.com/share/181UtAbQWR/" target="_blank" className="footer-social">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/mocktail.in?igsh=MWl5Z3dlbmRrczlpeQ==" target="_blank" className="footer-social">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
