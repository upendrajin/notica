import React, { useEffect, useRef, useState } from "react";

const cases = [
  {
    title: "Case A",
    duration: "1–2 Months",
    data: [
      { label: "Daily Sale", value: "₹5,000" },
      { label: "Revenue", value: "₹1,50,000" },
      { label: "Expenses", value: "₹87,500" },
      { label: "Profit", value: "₹62,500" },
    ],
  },
  {
    title: "Case B",
    duration: "3–5 Months",
    data: [
      { label: "Daily Sale", value: "₹8,500" },
      { label: "Revenue", value: "₹2,55,000" },
      { label: "Expenses", value: "₹1,19,000" },
      { label: "Profit", value: "₹1,35,500" },
    ],
  },
  {
    title: "Case C",
    duration: "6+ Months",
    data: [
      { label: "Daily Sale", value: "₹12,000" },
      { label: "Revenue", value: "₹3,60,000" },
      { label: "Expenses", value: "₹1,50,500" },
      { label: "Profit", value: "₹2,09,500" },
    ],
  },
];

function ROIProjection() {
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
    <section ref={sectionRef} className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 md:px-6">

        <div className="text-center section-header mb-16">
          <h2 className="text-4xl font-bold mb-2">ROI Projection</h2>
          <p> Projected sales based on our stores. At{" "}
            <span className="font-semibold text-green-700">Mocktail</span>, pricing
            maximizes sales, but figures may vary by location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cases.map((item, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-400 rounded-xl p-8 transition-all duration-700
                ${visible ? "roi-card-visible" : "opacity-0 translate-x-16"}
              `}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <h3 className="mb-1 text-center"
              style={{
                fontFamily: "var(--font-main)",
                fontSize:"24px",
                color: "var(--color-primary)"
              }}
              >
                {item.title}
              </h3>

              <p className="text-sm text-center text-gray-500 mb-6">
                {item.duration}
              </p>

              <div className="space-y-4">
                {item.data.map((row, i) => (
                  <div
                    key={i}
                    className="flex justify-between border-b border-gray-200 pb-2 text-sm"
                  >
                    <span className="text-gray-700">{row.label}</span>
                    <span className="font-medium" style={{
                      fontFamily: "var(--font-main)"
                    }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-x text-gray-800 mt-16 leading-relaxed">
          <strong>Disclaimer:</strong> This is a report used for indicative
          purposes only. No part of this report guarantees sales or costs.
          Revenue & expenditures are calculated based on reasonable assumptions
          derived from experience. The success of a franchise depends on pricing,
          service, demographics, paying capacity, and location. Figures may vary.
        </p>

      </div>
    </section>
  );
}

export default ROIProjection;
