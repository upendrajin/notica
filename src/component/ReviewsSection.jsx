import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    text:
      "Absolutely love this place! The sodas are so refreshing and creative — I've never tasted anything like the Mango Mint Fizz before! Super friendly staff too. Highly recommend.",
    name: "Shubhambhai",
    rating: 5,
  },
  {
    text:
      "Amazing flavors and great service. The quality is consistent every time and the ambiance is perfect for hanging out with friends.",
    name: "Rakesh Patel",
    rating: 4.5,
  },
  {
    text:
      "Unique soda experience! The drinks are refreshing and the staff is very welcoming. A must-visit spot.",
    name: "Amit Shah",
    rating: 4.5,
  },
];

const overallRating = 4.9;
const totalReviews = "38+";

function ReviewsSection() {
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
      className={`pb-24 transition-all duration-700 ${
        visible ? "review-visible" : "opacity-0 translate-y-16"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <div>
            <Swiper
              modules={[Pagination, Autoplay]}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              loop={true}
              className="review-swiper"
            >
              {reviews.map((item, index) => (
                <SwiperSlide key={index}>
                  
                  {/* STARS INSIDE REVIEW */}
                  <StarRating rating={item.rating} />

                  <p className="text-gray-700 leading-7 mb-6">
                    “{item.text}”
                  </p>

                  <p className="font-semibold text-gray-900">
                    – {item.name}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="lg:border-l lg:pl-12">

            <div className=" text-5xl font-semibold mb-2" style={{
              fontFamily: "var(--font-main)",
              color: "var(--color-primary)"
            }} >
              {overallRating}
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Based on {totalReviews} reviews
            </p>

            <div className="space-y-3 text-sm">
              <RatingRow stars={5} percent={95} />
              <RatingRow stars={4} percent={5} />
              <RatingRow stars={3} percent={0} />
              <RatingRow stars={2} percent={0} />
              <RatingRow stars={1} percent={0} />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-1 mb-4 text-lg" style={{
      color: "var(--color-primary)"
    }}>
      {[...Array(fullStars)].map((_, i) => (
        <span key={`f-${i}`}>★</span>
      ))}
      {hasHalf && <span>☆</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`e-${i}`} className="opacity-30">★</span>
      ))}
    </div>
  );
}

function RatingRow({ stars, percent }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-14 text-sm" style={{
        color: "var(--color-primary)"
      }}>
        {"★".repeat(stars)}
      </span>

      <div className="flex-1 bg-gray-200 h-2 rounded overflow-hidden">
        <div
          className="h-full transition-all duration-700"
          style={{ width: `${percent}%`, background: "var(--color-primary)" }}
        ></div>
      </div>

      <span className="w-10 text-xs" style={{
        fontFamily: "var(--font-main)"
      }}>
        {percent}%
      </span>
    </div>
  );
}

export default ReviewsSection;
