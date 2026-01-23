
import React, { useEffect, useRef, useState } from "react";
import { RiCheckDoubleLine } from "react-icons/ri";

function WhyChooseFranchise() {
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
      className={`pb-24 bg-white transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 md:px-6">

        {/* SECTION HEADER */}
        <div className="text-center section-header mb-16">
          <h2 className="text-4xl font-bold mb-2">
            Why Choose Our Franchise
          </h2>
          <p>
            Mocktail Soda & Ice Cream is not just a food business —
            it is a proven, repeat-customer–driven brand system.
          </p>
        </div>

        {/* CONTENT */}
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            <li className="about-list">
              <RiCheckDoubleLine size={20} style={{ color: "var(--color-primary)" }} />
              0% royalty for lifetime
            </li>
            <li className="about-list">
              <RiCheckDoubleLine size={20} style={{ color: "var(--color-primary)" }} />
              Lifetime operational and business support
            </li>
            <li className="about-list">
              <RiCheckDoubleLine size={20} style={{ color: "var(--color-primary)" }} />
              Established and trusted brand identity
            </li>
            <li className="about-list">
              <RiCheckDoubleLine size={20} style={{ color: "var(--color-primary)" }} />
              Strong repeat customer base
            </li>
            <li className="about-list">
              <RiCheckDoubleLine size={20} style={{ color: "var(--color-primary)" }} />
              Minimum staff requirement
            </li>
            <li className="about-list">
              <RiCheckDoubleLine size={20} style={{ color: "var(--color-primary)" }} />
              Fast and efficient service model
            </li>
            <li className="about-list">
              <RiCheckDoubleLine size={20} style={{ color: "var(--color-primary)" }} />
              Indian taste balanced with global flavors
            </li>
            <li className="about-list">
              <RiCheckDoubleLine size={20} style={{ color: "var(--color-primary)" }} />
              Identical taste and experience across all outlets
            </li>
          </ul>

          <p className="mt-8 text-center font-semibold">
            Result: <span className="font-bold">Low risk. High stability.</span>
          </p>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseFranchise;
