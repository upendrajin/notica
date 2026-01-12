import React, { useEffect, useRef, useState } from "react";

function ROISection() {
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
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full py-24 overflow-hidden transition-all duration-700 ${visible ? "roi-visible" : "opacity-0 translate-y-16"
        }`}
      style={{ backgroundColor: "var(--bg-m)" }}
    >
      <div className="web-wave"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-wrap items-stretch">

          {/* LEFT IMAGE */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-700 ${visible ? "roi-left-show" : "opacity-0 -translate-x-16"
              }`}
          >
            <div className="ROI-image ">
              <img
                src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03"
                alt="ROI Drinks"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className={`w-full lg:w-1/2 mt-12 lg:mt-0 lg:pl-16 flex flex-col justify-center transition-all duration-700 ${visible ? "roi-right-show" : "opacity-0 translate-x-16"
              }`}
          >
            <div className="text-start section-header-2">
              <h2 className="text-4xl font-bold mb-2">
                Return on Investment <br />
                <span className="font-semibold">(ROI)</span>
              </h2>
            </div>

            <div className="text-6xl fw-normal font-black text-green-700 mb-2" style={{ fontFamily: "var(--font-main)" }}>
              50–60%
            </div>

            <p className="uppercase tracking-widest font-semibold text-green-600 mb-6">
              Average Profit Margin
            </p>

            <p className="leading-7 max-w-md mb-7"
              style={{
                color: "var(--color-w-2)",
                fontWeight: "500"
              }}
            >
              Our robust R&D, customized menu engineering, affordable raw
              material sourcing, and optimized pricing strategy consistently
              deliver strong gross margins for franchise partners.
            </p>

            <p className="font-medium" style={{color: 'var(--color-w-1)'}}>
              Franchise ROI achieved in{" "}
              <span className="font-bold">6–12 months</span>
            </p>
          </div>

        </div>
      </div>

      <div className="web-wave-bottom"></div>
    </section>
  );
}

export default ROISection;
