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
        <h2 className="text-4xl font-bold mb-2">About Us</h2>
        <p>Fresh product. Same taste. Strong brand recall.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className={`about-left ${visible ? "about-left-show" : ""}`}>
            <img
              src="https://notica.in/botanica.risingbamboo.com/drinks-01/assets/About-Cert/about_shop.png"
              alt="Mocktail Soda & Ice Cream Outlet"
              className="mx-auto"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={`about-right ${visible ? "about-right-show" : ""}`}>
            <p className="leading-7 mb-8">
              <strong>Mocktail Soda & Ice Cream</strong> was founded in 2015 with a clear vision —
              Indian taste combined with a global beverage experience.
            </p>

            <ul className="space-y-4">
              <li className="about-list">
                <RiCheckDoubleLine size={20} style={{ color: "var(--color-primary)" }} />
                Strong presence across Gujarat with multiple outlets
              </li>
              <li className="about-list">
                <RiCheckDoubleLine size={20} style={{ color: "var(--color-primary)" }} />
                Surat – 8 outlets, Botad – 2 outlets, Amreli – 1 outlet
              </li>
              <li className="about-list">
                <RiCheckDoubleLine size={20} style={{ color: "var(--color-primary)" }} />
                Consistent taste and quality across every outlet
              </li>
              <li className="about-list">
                <RiCheckDoubleLine size={20} style={{ color: "var(--color-primary)" }} />
                Fresh products with zero wastage policy
              </li>
              <li className="about-list">
                <RiCheckDoubleLine size={20} style={{ color: "var(--color-primary)" }} />
                No harmful chemicals used in any product
              </li>
              <li className="about-list">
                <RiCheckDoubleLine size={20} style={{ color: "var(--color-primary)" }} />
                Affordable pricing with strong customer trust
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;
