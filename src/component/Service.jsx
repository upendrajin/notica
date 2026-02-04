// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// const services = [
//   {
//     title: "Fresh Soda & Shakes",
//     desc: "Premium soda and shake recipes crafted with quality ingredients and consistent taste.",
//     img: "https://notica.in/botanica.risingbamboo.com/drinks-01/assets/Services/FountainMachine.webp",
//   },
//   {
//     title: "Quick Service Model",
//     desc: "Optimized workflow designed for fast service and high customer turnover.",
//     img: "https://notica.in/botanica.risingbamboo.com/drinks-01/assets/Services/fridge-photoroom.png",
//   },
//   {
//     title: "Brand Support",
//     desc: "Complete branding, training, and operational support for franchise partners.",
//     img: "https://notica.in/botanica.risingbamboo.com/drinks-01/assets/interior_design.webp",
//   },
//   {
//     title: "Brand Support",
//     desc: "Complete branding, training, and operational support for franchise partners.",
//     img: "https://notica.in/botanica.risingbamboo.com/drinks-01/assets/interior_design.webp",
//   },

// ];

// function Service() {
//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* HEADER */}
//         <div className="text-center section-header mb-16">
//           <h2 className="text-4xl font-bold mb-2">Our Services</h2>
//           <p>We offer a wide range of services to meet the needs of our customers.</p>
//         </div>

//         {/* SWIPER */}
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           loop={true}
//           spaceBetween={64}
//           breakpoints={{
//             0: {
//               slidesPerView: 1,
//             },
//             768: {
//               slidesPerView: 2,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//         >
//           {services.map((item, index) => (
//             <SwiperSlide key={index}>
//               <div className="service-card text-center pb-10">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="mx-auto mb-8 h-[220px] object-contain"
//                 />
//                 <h3 className="service-title">{item.title}</h3>
//                 <p className="service-desc">{item.desc}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//       </div>
//     </section>
//   );
// }

// export default Service;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import machine from "../assets/soda-machine.png"
import chair from "../assets/store-chair.webp"
import nightStore from "../assets/night-store.png"
import Fridge from "../assets/Fridge-vertical.png"
import icecreamFridge from "../assets/icecream-fridge.png"
import filter from "../assets/water-filter.png"
import Counter from "../assets/counter.png"

const services = [
  {
    title: "5 baby chair & 10 Adult chair",
    desc: "Comfortable seating with cozy chairs and trendy outdoor stools for all ages.",
    img: chair,
  },
  {
    title: "Interior Design 300 to 350 sq.ft",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
    img: nightStore,
  },
  {
    title: "14+2 Soda fountain machine",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
    img: machine,
  },
  {
    title: "Fridge vertical",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
    img: Fridge,
  },
  {
    title: "Interior ACP includes counter with drawer.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
    img: Counter,
  },
  {
    title: "Ice cream freze",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
    img: icecreamFridge,
  },
  {
    title: "20 litters Fillter",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.",
    img: filter,
  },
];

function Service() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-2 md:px-6">

        {/* HEADER */}
        <div className="text-center section-header mb-16">
          <h2 className="text-4xl font-bold mb-2">Add On Services</h2>
          <p>
            End-to-end franchise ecosystem designed for fast start, stable operations,
            and scalable growth.
          </p>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          spaceBetween={64}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {services.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="service-card text-center pb-10">
                <img
                  src={item.img}
                  alt={item.title}
                  className="mx-auto mb-8 h-[220px] object-contain"
                />
                <h3 className="service-title">{item.title}</h3>
                <p className="service-desc">{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default Service;
