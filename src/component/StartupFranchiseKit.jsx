// import React, { useEffect, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// const kits = [
//     {
//         title: "JUICER MIXER",
//         img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
//     },
//     {
//         title: "LED BOARD INCLUDED",
//         img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
//     },
//     {
//         title: "CCTV CAMERA INCLUDED",
//         img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
//     },
//     {
//         title: "REFRIGERATION SETUP",
//         img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
//     },
//     {
//         title: "INTERIOR BRANDING",
//         img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
//     },
// ];

// function StartupFranchiseKit() {
//     const sectionRef = useRef(null);
//     const [visible, setVisible] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setVisible(true);
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
//             className={`bg-white py-24 overflow-hidden transition-all duration-700 ${visible ? "kit-visible" : "opacity-0 translate-y-16"
//                 }`}
//             style={{ backgroundColor: "var(--bg-m)" }}
//         >
//             <div className="web-wave"></div>

//             <div className="max-w-7xl mx-auto px-6">

//                 <div className="text-center section-header-2 ">
//                     <h2 className="text-4xl font-bold mb-2">Startup Franchise Kit</h2>
//                     <p>
//                         Complete setup by{" "}
//                         <span className="font-semibold text-green-700">Mocktail team</span> is
//                         also offered in case where you wish to get the interior or exterior
//                         setup done by us.
//                     </p>
//                 </div>

//                 <Swiper
//                     modules={[Autoplay, Pagination]}
//                     autoplay={{
//                         delay: 2500,
//                         disableOnInteraction: false,
//                     }}
//                     loop={true}
//                     pagination={{ clickable: true }}
//                     spaceBetween={30}
//                     slidesPerView={1}
//                     breakpoints={{
//                         640: { slidesPerView: 2 },
//                         1024: { slidesPerView: 3 },
//                     }}
//                     className="swiper-2"
//                 >
//                     {kits.map((item, index) => (
//                         <SwiperSlide key={index} style={{
//                             paddingBottom: "35px",
//                             paddingTop: "35px",
//                         }}>
//                             <div
//                                 className={`bg-white border border-gray-100 rounded-xl p-6 h-full
//                                 flex flex-col items-center justify-between
//                                 transition-all duration-500 hover:-translate-y-2
//                                 ${visible ? "kit-card-visible" : "opacity-0 translate-x-12"}
//                             `}
//                                 style={{ transitionDelay: `${index * 120}ms` }}
//                             >
//                                 <div className="w-full h-56 flex items-center justify-center mb-6">
//                                     <img
//                                         src={item.img}
//                                         alt={item.title}
//                                         className="max-h-full object-contain"
//                                     />
//                                 </div>

//                                 <h3 className="text-center font-bold tracking-wide" style={{
//                                     fontFamily: "var(--font-main)"
//                                 }}>
//                                     {item.title}
//                                 </h3>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>

//             </div>

//             <div className="web-wave-bottom"></div>

//         </section>
//     );
// }

// export default StartupFranchiseKit;

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import machine from "../assets/soda-machine.png"
import chair from "../assets/store-chair.webp"
import nightStore from "../assets/night-store.png"
import Fridge from "../assets/Fridge-vertical.png"
import icecreamFridge from "../assets/icecream-fridge.png"
import filter from "../assets/water-filter.png"
import Counter from "../assets/counter.png"

const kits = [
    {
        title: "14+2 Soda fountain machine",
        img: machine,
    },
    {
        title: "Fridge vertical",
        img: Fridge,
    },
    {
        title: "Interior Design 300 to 350 sq.ft",
        img: nightStore,
    },
    {
        title: "5 baby chair & 10 Adult chair",
        img: chair,
    },
    {
        title: "Ice cream freze",
        img: icecreamFridge,
    },
    {
        title: "Interior ACP includes counter with drawer.",
        img: Counter,
    },
    {
        title: "20 litters Fillter",
        img: filter,
    },
];

function StartupFranchiseKit() {
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
            className={`bg-white py-24 overflow-hidden transition-all duration-700 ${
                visible ? "kit-visible" : "opacity-0 translate-y-16"
            }`}
            style={{ backgroundColor: "var(--bg-m)" }}
        >
            <div className="web-wave"></div>

            <div className="max-w-7xl mx-auto px-2 md:px-6">

                <div className="text-center section-header-2">
                    <h2 className="text-4xl font-bold mb-2">Startup Kit</h2>
                    <p>
                        Every franchise partner receives a complete, ready-to-run outlet —
                        <span className="font-semibold text-green-700">
                            {" "}from Day One
                        </span>.
                    </p>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="swiper-2"
                >
                    {kits.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            style={{
                                paddingBottom: "35px",
                                paddingTop: "35px",
                            }}
                        >
                            <div
                                className={`bg-white border border-gray-100 rounded-xl p-6 h-full
                                flex flex-col items-center justify-between
                                transition-all duration-500 hover:-translate-y-2
                                ${visible ? "kit-card-visible" : "opacity-0 translate-x-12"}
                            `}
                                style={{ transitionDelay: `${index * 120}ms` }}
                            >
                                <div className="w-full h-56 flex items-center justify-center mb-6">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="max-h-full object-contain"
                                    />
                                </div>

                                <h3
                                    className="text-center font-bold tracking-wide"
                                    style={{ fontFamily: "var(--font-main)" }}
                                >
                                    {item.title}
                                </h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

            <div className="web-wave-bottom"></div>
        </section>
    );
}

export default StartupFranchiseKit;
