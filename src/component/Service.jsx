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

const services = [
  {
    title: "Brand License",
    desc: "Official brand licensing with complete rights to operate under the Mocktail Soda & Ice Cream brand.",
    img: "https://notica.in/botanica.risingbamboo.com/drinks-01/assets/Services/FountainMachine.webp",
  },
  {
    title: "Outlet Planning & Setup",
    desc: "Location finalization, outlet layout planning, equipment, and furniture setup handled end-to-end.",
    img: "https://notica.in/botanica.risingbamboo.com/drinks-01/assets/Services/fridge-photoroom.png",
  },
  {
    title: "Branding & Launch Support",
    desc: "Complete branding, signage, supplier chain access, and grand opening marketing support.",
    img: "https://notica.in/botanica.risingbamboo.com/drinks-01/assets/interior_design.webp",
  },
  {
    title: "Ongoing Business Guidance",
    desc: "Continuous operational support to ensure stable performance and scalable growth.",
    img: "https://notica.in/botanica.risingbamboo.com/drinks-01/assets/interior_design.webp",
  },
];

function Service() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-2 md:px-6">

        {/* HEADER */}
        <div className="text-center section-header mb-16">
          <h2 className="text-4xl font-bold mb-2">Our Services</h2>
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
