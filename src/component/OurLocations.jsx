import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const locations = [
  {
    title: "Ambedkar Chowk Amravati Road, Ner",
    owner: "Sureshbhai",
    map: "https://www.google.com/maps?q=20.4972,77.7521&output=embed",
  },
  {
    title: "Chitra Chowk Jawahar Road Amravati",
    owner: "Sayajibhai",
    map: "https://www.google.com/maps?q=20.9374,77.7796&output=embed",
  },
  {
    title: "Tukum Road Near Gurudwara Chandrapur",
    owner: "Narendra",
    map: "https://www.google.com/maps?q=19.9500,79.2950&output=embed",
  },
  {
    title: "New Market Area",
    owner: "Ramesh",
    map: "https://www.google.com/maps?q=21.1458,79.0882&output=embed",
  },
  {
    title: "New Market Area",
    owner: "Ramesh",
    map: "https://www.google.com/maps?q=21.1458,79.0882&output=embed",
  },
  {
    title: "New Market Area",
    owner: "Ramesh",
    map: "https://www.google.com/maps?q=21.1458,79.0882&output=embed",
  },
  {
    title: "New Market Area",
    owner: "Ramesh",
    map: "https://www.google.com/maps?q=21.1458,79.0882&output=embed",
  },

];

function OurLocations() {
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
      className={`relative py-24 overflow-hidden transition-all duration-700 ${visible ? "location-visible" : "opacity-0 translate-y-16"
        }`}
      style={{ backgroundColor: "var(--bg-m))" }}
    >
      <div className="web-wave"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center section-header mb-16">
          <h2 className="text-4xl font-bold mb-2">Our Locations</h2>
          <p>We operate across multiple strategic locations to serve customers efficiently.</p>
        </div>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {locations.map((item, index) => (
            <SwiperSlide key={index} className="pb-10">
              <div
                className={`bg-white rounded-xl border border-gray-600 overflow-hidden
                transition-all duration-700
                ${visible ? "location-card-visible" : "opacity-0 translate-y-10"}
              `}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <iframe
                  src={item.map}
                  className="w-full h-64 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <div className="p-4 text-center">
                  <h3 className="font-semibold  mb-1" style={{
                    fontFamily: "var(--font-main)"
                  }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-semibold">
                    Owner: {item.owner}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <div className="web-wave-bottom"></div>
    </section>
  );
}

export default OurLocations;
