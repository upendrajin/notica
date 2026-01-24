// import React, { useEffect, useRef, useState } from "react";

// const leftPhases = [
//     {
//         title: "Phase 01",
//         desc: "Ask Our Team For “pro Setup” To Know And Then Space Or Shop Inspection Done By Franchies",
//         onImg: "https://botanica.risingbamboo.com/wp-content/uploads/2024/10/healthcare.svg",
//     },
//     {
//         title: "Phase 02",
//         desc: "Franchise Booking to be done with a deposit of Rs. 1,00,000 in NOTICA LLP Account & Application Form Following which the agreement and Legal Copies are Completed and got notarized.",
//         onImg: "https://botanica.risingbamboo.com/wp-content/uploads/2024/10/apple.svg",
//     },
//     {
//         title: "Phase 03",
//         desc: "1st Installment of Rs.3,50,000 the Franchise to be paid within 10 Days of the Booking to prevent lapse of franchise booking.",
//         onImg: "https://botanica.risingbamboo.com/wp-content/uploads/2024/10/wheat-flour.svg",
//     },
// ];

// const rightPhases = [
//     {
//         title: "Phase 04",
//         desc: "All Materials are dispatched against the Balance Full Payment (3,50,000)/following. Chef Training is Done with Standard Operations Procedures (SOP).",
//         onImg: "https://botanica.risingbamboo.com/wp-content/uploads/2024/10/oranges.svg",
//     },
//     {
//         title: "Phase 05",
//         desc: "Agreement period starts from the date of Inauguration & monthly monitoring with helpline executive assigned.",
//         onImg: "https://botanica.risingbamboo.com/wp-content/uploads/2024/10/protection.svg",
//     },
// ];

// function Process() {
//     const sectionRef = useRef(null);
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsVisible(true);
//                     observer.disconnect();
//                 }
//             },
//             { threshold: 0.3 }
//         );

//         if (sectionRef.current) observer.observe(sectionRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <section
//             ref={sectionRef}
//             className={`process-wrapper relative overflow-hidden ${isVisible ? "process-visible" : ""
//                 }`}
//         >
//             {/* TOP WAVE */}
//             <div className="web-wave"></div>

//             <div className="max-w-7xl mx-auto px-6 pt-28 pb-24">
//                 <div className="text-center section-header-2 mb-16">
//                     <h2 className="text-4xl font-bold mb-2">Franchise Application Setup Process</h2>
//                     <p>We provide end-to-end franchise application setup services, ensuring a streamlined, compliant, and efficient onboarding process for our partners.</p>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

//                     {/* LEFT */}
//                     <div className="space-y-12 order-2 lg:order-1">
//                         {leftPhases.map((item, index) => (
//                             <div key={index} className="process-item process-left">
//                                 <div>
//                                     <div className="flex flex-wrap items-center mt-1 mb-3 gap-4">
//                                         <img
//                                             src={item.onImg}
//                                             className="process-point-wrap process-point"
//                                             alt=""
//                                         />
//                                         <h4>{item.title}</h4>
//                                     </div>
//                                     <p>{item.desc}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* CENTER IMAGE */}
//                     <div className="flex justify-center order-1 lg:order-2">
//                         <img
//                             src="https://notica.in/botanica.risingbamboo.com/wp-content/uploads/2024/10/juice-9-2.png"
//                             className={`process-center-img ${isVisible ? "center-visible" : ""
//                                 }`}
//                             alt=""
//                         />
//                     </div>

//                     {/* RIGHT */}
//                     <div className="space-y-12 order-3">
//                         {rightPhases.map((item, index) => (
//                             <div key={index} className="process-item process-right">
//                                 <div>
//                                     <div className="flex flex-wrap items-center mt-1 mb-3 gap-4">
//                                         <img
//                                             src={item.onImg}
//                                             className="process-point-wrap process-point"
//                                             alt=""
//                                         />
//                                         <h4>{item.title}</h4>
//                                     </div>
//                                     <p>{item.desc}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                 </div>
//             </div>

//             <div className="web-wave-bottom"></div>
//         </section>
//     );
// }

// export default Process;

import React, { useEffect, useRef, useState } from "react";
import mocktail from "../assets/mocktail.png";

const leftPhases = [
    {
        title: "Phase 01",
        desc: "Inquiry and detailed discussion to understand the franchise model, requirements, and expectations.",
        onImg: "https://botanica.risingbamboo.com/wp-content/uploads/2024/10/healthcare.svg",
    },
    {
        title: "Phase 02",
        desc: "Location evaluation and feasibility analysis to ensure strong business potential.",
        onImg: "https://botanica.risingbamboo.com/wp-content/uploads/2024/10/apple.svg",
    },
    {
        title: "Phase 03",
        desc: "Investment finalization followed by franchise agreement documentation and approval.",
        onImg: "https://botanica.risingbamboo.com/wp-content/uploads/2024/10/wheat-flour.svg",
    },
];

const rightPhases = [
    {
        title: "Phase 04",
        desc: "Outlet setup, equipment installation, interior execution, and branding implementation.",
        onImg: "https://botanica.risingbamboo.com/wp-content/uploads/2024/10/oranges.svg",
    },
    {
        title: "Phase 05",
        desc: "Comprehensive staff training covering operations, product preparation, and SOP standards.",
        onImg: "https://botanica.risingbamboo.com/wp-content/uploads/2024/10/protection.svg",
    },
    {
        title: "Phase 06",
        desc: "Grand store launch supported by marketing campaigns and promotional push.",
        onImg: "https://botanica.risingbamboo.com/wp-content/uploads/2024/10/protection.svg",
    },
];

function Process() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
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
            className={`process-wrapper relative overflow-hidden ${
                isVisible ? "process-visible" : ""
            }`}
        >
            {/* TOP WAVE */}
            <div className="web-wave"></div>

            <div className="max-w-7xl mx-auto px-2 md:px-6 pt-28 pb-24">
                <div className="text-center section-header-2 mb-16">
                    <h2 className="text-4xl font-bold mb-2">
                        Franchise Application Process
                    </h2>
                    <p>
                        Simple. Transparent. Fast execution.  
                        A structured roadmap from inquiry to successful store launch.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

                    {/* LEFT */}
                    <div className="space-y-12 order-2 lg:order-1">
                        {leftPhases.map((item, index) => (
                            <div key={index} className="process-item process-left">
                                <div>
                                    <div className="flex flex-wrap items-center mt-1 mb-3 gap-4">
                                        <img
                                            src={item.onImg}
                                            className="process-point-wrap process-point"
                                            alt=""
                                        />
                                        <h4>{item.title}</h4>
                                    </div>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CENTER IMAGE */}
                    <div className="flex justify-center order-1 lg:order-2">
                        <img
                            src={mocktail}
                            className={`process-center-img ${
                                isVisible ? "center-visible" : ""
                            }`}
                            alt=""
                        />
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-12 order-3">
                        {rightPhases.map((item, index) => (
                            <div key={index} className="process-item process-right">
                                <div>
                                    <div className="flex flex-wrap items-center mt-1 mb-3 gap-4">
                                        <img
                                            src={item.onImg}
                                            className="process-point-wrap process-point"
                                            alt=""
                                        />
                                        <h4>{item.title}</h4>
                                    </div>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <div className="web-wave-bottom"></div>
        </section>
    );
}

export default Process;
