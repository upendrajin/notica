import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-wrapper relative">

      <div className="web-wave"></div>

      <div className="max-w-5xl mx-auto px-6 py-20 text-center">

        <img
          src="https://notica.in/botanica.risingbamboo.com/drinks-01/assets/notica_small_logo.webp"
          alt="Notica Logo"
          className="mx-auto h-24 mb-3"
        />

        <p className="text-sm font-medium mb-6">
          Surat Food N Beverage Pvt. Ltd.
        </p>

        <p className="footer-text">
          Plot No. 15, Block No. 158, Survey No. 152, Liberty Industrial Park,
          Bhada,
        </p>
        <p className="footer-text">
          Kamrej, 394190 Surat, Gujarat, India.
        </p>
        <p className="footer-text mt-4">
          83474 63055 | 97271 51653 | 88664 43220
        </p>

        <div className="flex justify-center gap-4 mt-10">
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
