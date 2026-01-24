import React, { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import suportGirl from "../assets/support.png";

function Help() {

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

            <div className="max-w-7xl mx-auto px-2 md:px-6 relative z-10">
                <div className="flex flex-wrap items-stretch">

                    <div
                        className={`w-full lg:w-1/2 transition-all duration-700 ${visible ? "roi-left-show" : "opacity-0 -translate-x-16"
                            }`}
                    >
                        <div className="ROI-image ">
                            <img
                                src={suportGirl}
                                alt="ROI Drinks"
                                className="w-full h-full object-cover block"
                            />
                        </div>
                    </div>

                    <div
                        className={`w-full lg:w-1/2 mt-12 lg:mt-0 lg:pl-16 flex flex-col justify-center transition-all duration-700 ${visible ? "roi-right-show" : "opacity-0 translate-x-16"
                            }`}
                    >
                        <div className="text-start section-header-2 mb-5">
                            <h2 className="text-4xl font-bold mb-2"> Resolution to Any Query Within 24 Hours</h2>
                            <p> We provide <strong>dedicated helpline support</strong>  exclusive for every
                                franchise, ensuring your concerns are addressed promptly and efficiently.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-5 mb-4 w-full">
                            <span className="flex flex-wrap items-center gap-3 font-semibold" style={{color: "var(--color-w-1)"}}>
                                <span className="text-gray-800 font-medium"><IoCallOutline size={20} style={{ color: "var(--color-w-1)" }} /></span>
                                +91 8469464739
                            </span>
                            <span className="flex flex-wrap items-center gap-3 font-semibold" style={{color: "var(--color-w-1)"}}>
                                <span className="text-gray-800 font-medium"><FaWhatsapp size={20} style={{ color: "var(--color-w-1)" }} /></span>
                                +91 8469464739
                            </span>
                        </div>

                        <p className="font-medium" style={{color: "var(--color-w-2)"}}>
                            *Working Hours:* 9am to 11pm (Monday to Friday)
                        </p>
                    </div>

                </div>
            </div>

            <div className="web-wave-bottom"></div>
        </section>
    );
}

export default Help
