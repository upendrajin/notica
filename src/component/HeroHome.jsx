import React from "react";

function HeroHome() {
  return (
    <section className="hero-home min-h-screen relative overflow-hidden flex items-center">

      <img
        src="https://notica.in/botanica.risingbamboo.com/wp-content/uploads/2024/10/s10-mint-1.png"
        alt="Mint"
        className="absolute top-24 right-36 w-24 animate-mint hidden lg:block"
      />

      <img
        src="https://notica.in/botanica.risingbamboo.com/wp-content/uploads/2024/10/s10-lemmon-2.png"
        alt="Lemon"
        className="absolute top-44 right-16 w-20 animate-lemon hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="animate-text text-center lg:text-left">
            <p className="text-lg font-bold tracking-widest uppercase text-black opacity-40 mb-4">
              The Taste of Legends
            </p>
            <h1 className="hero-title">
              Soda & Shake <br /> Franchise
            </h1>
          </div>
          <div className="flex items-center justify-center w-full h-full animate-main-img">
            <img
              src="https://notica.in/botanica.risingbamboo.com/drinks-01/assets/mainhero.png"
              alt="Soda Glasses"
              className="hero-main-img"
            />
          </div>
        </div>
      </div>

      <div className="web-wave-bottom"></div>

    </section>
  );
}

export default HeroHome;
