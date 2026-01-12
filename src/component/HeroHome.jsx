import React, { useEffect, useRef } from "react";

function HeroHome() {
  const mintWrapRef = useRef(null);
  const lemonWrapRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      if (mintWrapRef.current) {
        mintWrapRef.current.style.transform = `translate(${x * 14}px, ${y * 14}px)`;
      }

      if (lemonWrapRef.current) {
        lemonWrapRef.current.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero-home min-h-screen relative overflow-hidden flex items-center pt-50 lg:p-0">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="animate-text text-center lg:text-left mt-10 lg:mt-0">
            <p className="text-lg font-normal tracking-widest uppercase  mb-4" style={{color: "var(--color-w-2)"}}>
              The Taste of Legends
            </p>
            <h1 className="hero-title">
              Soda & Shake <br /> Franchise
            </h1>
          </div>

          <div className="flex items-center justify-center w-full h-full animate-main-img">
            <div
              ref={mintWrapRef}
              className="absolute top-10 right-25 lg:top-50 lg:right-45  lg:block transition-transform duration-200 ease-out"
            >
              <img
                src="https://notica.in/botanica.risingbamboo.com/wp-content/uploads/2024/10/s10-mint-1.png"
                alt="Mint"
                className="w-24 animate-mint"
              />
            </div>

            {/* Lemon Wrapper (NEW – invisible, does not affect UI) */}
            <div
              ref={lemonWrapRef}
              className="absolute top-40 right-15  lg:top-80 lg:right-35 lg:block transition-transform duration-200 ease-out"
            >
              <img
                src="https://notica.in/botanica.risingbamboo.com/wp-content/uploads/2024/10/s10-lemmon-2.png"
                alt="Lemon"
                className="w-20 animate-lemon"
              />
            </div>
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
