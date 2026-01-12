import React, { useEffect, useRef, useState } from "react";
import { RiCheckDoubleLine } from "react-icons/ri";

function AboutUs() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 overflow-hidden"
    >

      <div className="text-center section-header mb-16">
        <h2 className="text-4xl font-bold mb-2">Aboute Us</h2>
        <p>We offer a wide range of services to meet the needs of our customers.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className={`about-left ${visible ? "about-left-show" : ""}`}>
            <img
              src="https://notica.in/botanica.risingbamboo.com/drinks-01/assets/About-Cert/about_shop.png"
              alt="About Notica"
              className="mx-auto"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={`about-right ${visible ? "about-right-show" : ""}`}>
            <p className="leading-7 mb-8">
              <strong>Surat Food And Beverages</strong> is a leading innovator in
              high-quality flavors for the soft drink industry. Based in Surat,
              we specialize in crafting mouth-watering soda flavors and
              milkshakes that delight customers globally.
            </p>

            <ul className="space-y-4">
              <li className="about-list">
                <RiCheckDoubleLine size={20} style={{color: "var(--color-primary)"}} />
                Premium soft drink flavor innovations
              </li>
              <li className="about-list">
                <RiCheckDoubleLine size={20} style={{color: "var(--color-primary)"}} />
                Vision to lead niche beverage markets
              </li>
              <li className="about-list">
                <RiCheckDoubleLine size={20} style={{color: "var(--color-primary)"}} />
                Setting new standards in quality & taste
              </li>
              <li className="about-list">
                <RiCheckDoubleLine size={20} style={{color: "var(--color-primary)"}} />
                Surat-based with global ambitions
              </li>
              <li className="about-list">
                <RiCheckDoubleLine size={20} style={{color: "var(--color-primary)"}} />
                Robust marketing and supply chain team
              </li>
              <li className="about-list">
                <RiCheckDoubleLine size={20} style={{color: "var(--color-primary)"}} />
                Growth driven by a franchise-first model
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;
