import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const videos = [
    {
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
        caption: "Experience our unique soda-making process.",
    },
    {
        src: "https://www.w3schools.com/html/movie.mp4",
        caption: "Become part of our growing franchise community.",
    },
    {
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
        caption: "Experience our unique soda-making process.",
    },
    {
        src: "https://www.w3schools.com/html/movie.mp4",
        caption: "Become part of our growing franchise community.",
    },
    {
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
        caption: "Experience our unique soda-making process.",
    },
];

function FranchiseStory() {
    const sectionRef = useRef(null);
    const swiperRef = useRef(null);
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
            className={`pt-24 overflow-hidden transition-all duration-700 ${visible ? "story-visible" : "opacity-0 translate-y-16"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center section-header mb-12">
                    <h2 className="text-4xl font-bold mb-2">Our Soda Franchise Story</h2>
                    <p>Our story is driven by innovation, strong partnerships, and customer trust.</p>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{ clickable: true }}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                    onMouseLeave={() => swiperRef.current?.autoplay.start()}
                    className="overflow-hidden"
                >
                    {videos.map((item, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <div
                                className={`story-slide transition-all pb-10 duration-500 ${visible ? "story-card-visible" : "opacity-0 translate-x-6"
                                    }`}
                                style={{ transitionDelay: `${index * 120}ms` }}
                            >
                                <div className="reel-wrapper">
                                    <video
                                        src={item.src}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="reel-video"
                                    />
                                </div>

                                <p className="reel-caption">
                                    {item.caption}
                                </p>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>

            </div>
        </section>
    );
}

export default FranchiseStory;
