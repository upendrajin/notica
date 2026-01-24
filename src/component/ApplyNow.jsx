// import React, { useEffect, useRef, useState } from "react";

// function ApplyNow() {
//   const sectionRef = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.25 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className={`bg-white py-28 transition-all duration-700 ${visible ? "apply-visible" : "opacity-0 translate-y-16"
//         }`}
//     >
//       <div className="max-w-6xl mx-auto px-6">

//         <div className="text-center mb-14">
//           <div className="text-center section-header">
//             <h2 className="text-4xl font-bold mb-2">
//               Apply Now And <br />
//               Get All This at Only
//             </h2>
//           </div>

//           <div className="price-zoom text-5xl md:text-6xl text-green-600 font-black mb-4">
//             ₹8,00,000<span className="text-xl align-top">*</span>
//           </div>

//           <div className="text-center section-header pb-0">
//             <p>
//               Franchise Helpline |{" "}
//               <span className="font-semibold">8347463055</span>
//             </p>
//           </div>
//         </div>

//         <div className="bg-white border border-gray-500 rounded-2xl p-5 md:p-7">
//           <h3 className="text-2xl font-semibold mb-2" style={{
//             fontFamily: "var(--font-main)"
//           }}>
//             Terms & Conditions
//           </h3>

//           <div className="w-12 h-1 rounded-3xl mb-6" style={{
//             backgroundColor: "var(--color-primary)"
//           }}></div>

//           <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
//             {[
//               "All payments made are non-refundable.",
//               "18% GST as per government policy & subject to change.",
//               "No royalty model with 100% transparency in terms.",
//               "All policies by Notica are to be followed.",
//               "Materials get dispatched within 1–2 weeks of final payment.",
//               "One-year warranty for Notica shop service (travel expenses borne by shop owner).",
//               "NEFT/RTGS and cash deposits on company account only.",
//               "Transport of materials & raw material cost borne by franchisee.",
//               "All subject to Surat jurisdiction.",
//               "Raw materials must be purchased from Notica only.",
//               "If outside raw materials are used, a 10% royalty applies.",
//               "No new franchise within a 2 km radius of an existing Notica shop.",
//             ].map((item, index) => (
//               <li key={index} className="flex gap-3">
//                 <span className="font-bold" style={{
//                   color: "var(--color-primary)"
//                 }}>•</span>
//                 <span style={{
//                   fontSize: "16px"
//                 }}>{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ApplyNow;

import React, { useEffect, useRef, useState } from "react";

function ApplyNow() {
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
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`bg-white py-28 transition-all duration-700 ${
        visible ? "apply-visible" : "opacity-0 translate-y-16"
      }`}
    >
      <div className="max-w-6xl mx-auto px-2 md:px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="text-center section-header">
            <h2 className="text-4xl font-bold mb-2">
              Franchise Investment <br />
              Plug-and-Play Business Model
            </h2>
          </div>

          <p className="mt-3 mb-4 text-gray-600">
            Total Investment Range
          </p>

          <div className="price-zoom text-5xl md:text-6xl text-green-600 font-black mb-4">
            ₹9,00,000<span className="text-xl">*</span>
          </div>

          <div className="text-center section-header pb-0">
            <p>
              Franchise Helpline |{" "}
              <span className="font-semibold">+91 8469464739</span>
            </p>
          </div>
        </div>

        {/* INVESTMENT INCLUDES */}
        <div className="bg-white border border-gray-500 rounded-2xl p-5 md:p-7 mb-10">
          <h3
            className="text-2xl font-semibold mb-2"
            style={{ fontFamily: "var(--font-main)" }}
          >
            Investment Includes
          </h3>

          <div
            className="w-12 h-1 rounded-3xl mb-6"
            style={{ backgroundColor: "var(--color-primary)" }}
          ></div>

          <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
            {[
              "Complete outlet setup",
              "All machines and essential equipment",
              "Furniture and layout execution",
              "Brand signage and visual identity",
              "Owner and staff training",
              "Marketing and operational guidelines",
              "Lifetime access to new recipes",
              "R&D support and product innovations",
              "Complete brand identity kit",
            ].map((item, index) => (
              <li key={index} className="flex gap-3">
                <span
                  className="font-bold"
                  style={{ color: "var(--color-primary)" }}
                >
                  •
                </span>
                <span style={{ fontSize: "16px" }}>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 font-semibold text-center">
            Ready-to-run outlet from Day One.
          </p>
        </div>

        {/* TERMS */}
        <div className="bg-white border border-gray-500 rounded-2xl p-5 md:p-7">
          <h3
            className="text-2xl font-semibold mb-2"
            style={{ fontFamily: "var(--font-main)" }}
          >
            Terms & Conditions
          </h3>

          <div
            className="w-12 h-1 rounded-3xl mb-6"
            style={{ backgroundColor: "var(--color-primary)" }}
          ></div>

          <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
            {[
              "All payments made are non-refundable.",
              "18% GST applicable as per government policy.",
              "No royalty model with complete transparency.",
              "All brand policies must be followed.",
              "Materials dispatched within 1–2 weeks after final payment.",
              "One-year service warranty (travel cost borne by franchisee).",
              "Payments accepted via NEFT/RTGS or company account deposit only.",
              "Transport and raw material costs borne by franchisee.",
              "All disputes subject to Surat jurisdiction.",
              "Raw materials must be sourced from the company.",
              "Use of outside raw materials attracts a 10% royalty.",
              "No new franchise allowed within a 2 km radius.",
            ].map((item, index) => (
              <li key={index} className="flex gap-3">
                <span
                  className="font-bold"
                  style={{ color: "var(--color-primary)" }}
                >
                  •
                </span>
                <span style={{ fontSize: "16px" }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

export default ApplyNow;
