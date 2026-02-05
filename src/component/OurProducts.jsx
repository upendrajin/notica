import React, { useEffect, useRef, useState } from "react";
import machine from "../assets/soda-machine.png";
import Fridge from "../assets/Fridge-vertical.png";
import TV from "../assets/tv.png";
import { Link } from "react-router-dom";

const products = [
  { title: "14+2 Soda Fountain Machine", img: machine },
  { title: "Fridge vertical (300 Ltr)", img: Fridge },
  { title: "TV Included", img: TV },
];

function OurProducts() {
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
      className={`bg-white transition-all duration-700 ${
        visible ? "products-visible" : "opacity-0 translate-y-16"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 md:px-6">
        <div className="text-center section-header mb-10">
          <h2 className="text-4xl font-bold mb-2">Our Products</h2>
          <p>We offer a wide range of services to meet the needs of our customers.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {products.map((item, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-500 rounded-xl p-6 text-center
              transition-all duration-500 hover:-translate-y-2
              ${visible ? "product-card-visible" : "opacity-0 translate-x-12"}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="h-48 flex items-center justify-center mb-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="max-h-full object-contain"
                />
              </div>

              <h3
                className="text-black font-semibold"
                style={{ fontFamily: "var(--font-main)" }}
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/products" className="btn-1">
            Show More
          </Link>
          
          
        </div>
      </div>
    </section>
  );
}

export default OurProducts;
