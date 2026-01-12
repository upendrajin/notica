import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-wrapper relative">

      <div className="web-wave"></div>

      <div className="max-w-5xl mx-auto px-6 pt-20 pb-10 text-center">

        <img
          src="/logo.png"
          alt="Notica Logo"
          className="mx-auto h-24 mb-10"
        />

        <p className="text-normal font-medium mb-6" style={{color: "var(--color-w-1)"}}>
          Surat Food N Beverage Pvt. Ltd.
        </p>

        <p className="footer-text" style={{color: "var(--color-w-2)"}}>
          Plot No. 15, Block No. 158, Survey No. 152, Liberty Industrial Park,
          Bhada,
        </p>
        <p className="footer-text" style={{color: "var(--color-w-2)"}}>
          Kamrej, 394190 Surat, Gujarat, India.
        </p>
        <p className="footer-text mt-4" style={{color: "var(--color-w-2)"}}>
          83474 63055 | 97271 51653 | 88664 43220
        </p>

        <div className="flex justify-center gap-4 mt-10 ">
          <a href="#" className="footer-social">
            <FaFacebookF />
          </a>
          <a href="#" className="footer-social">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
