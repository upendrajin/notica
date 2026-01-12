import React, { useEffect, useRef, useState } from "react";

function OwnerTraining() {
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
      className={`bg-white py-24 transition-all duration-700 ${visible ? "training-visible" : "opacity-0 translate-y-16"
        }`}
    >
      <div className="max-w-7xl px-6 mx-auto">

        <div className="text-center section-header ">
          <h2 className="text-4xl font-bold mb-2">Owner Training</h2>
        </div>

        <div className="text-center mb-2">
          <h2 className="text-4xl font-normol mb-4" style={{ color: "#929292" }}>
            We Help You Hire
          </h2>

          <div className="w-15 h-1 bg-gray-400 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">

          <h3 className="text-xl font-semibold mb-6" style={{
            fontFamily: "var(--font-main)"
          }}>
            Complete Guide On
          </h3>

          <ul className="space-y-4 mb-5">
            {[
              "How To Hire",
              "Sources To Hire",
              "Hiring Conditions",
              "Staff Joining And Document Procedure",
            ].map((item, index) => (
              <li
                key={index}
                className="training-point flex items-center gap-3 text-gray-700"
              >
                <span className="training-arrow">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mb-4" style={{
            fontFamily: "var(--font-main)"
          }}>
            Cafe Maintenance Planner
          </h3>

          <div className="training-note">
            We provide a comprehensive day-to-day planner to manage hygiene and
            systematic staff management as per industry standards.
          </div>

        </div>
      </div>
    </section>
  );
}

export default OwnerTraining;
