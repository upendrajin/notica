import React, { useEffect, useRef, useState } from "react";

const certifications = [
  {
    img: "https://notica.in/botanica.risingbamboo.com/drinks-01/assets/About-Cert/FSSAI_logo.webp",
    alt: "FSSAI",
  },
  {
    img: "https://notica.in/botanica.risingbamboo.com/drinks-01/assets/About-Cert/Satyamev.webp",
    alt: "Government of India",
  },
  {
    img: "https://notica.in/botanica.risingbamboo.com/drinks-01/assets/About-Cert/msme-logo.webp",
    alt: "MSME",
  },
  {
    img: "https://notica.in/botanica.risingbamboo.com/drinks-01/assets/product/make-in-india.png",
    alt: "Make in India",
  },
];

function Certificate() {
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
      className={`cert-wrapper pb-24 bg-white ${visible ? "cert-visible" : ""
        }`}
    >
      <div className="text-center section-header mb-16">
        <h2 className="text-4xl font-bold mb-2">Our Certification</h2>
        <p>We offer a wide range of services to meet the needs of our customers.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
          {certifications.map((item, index) => (
            <div key={index} className="cert-box">
              <img
                src={item.img}
                alt={item.alt}
                className="cert-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificate;
