import React, { useEffect, useRef, useState } from "react";
import { FaInstagram } from "react-icons/fa";

function CreateReelSection() {
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
      className={`relative py-28 overflow-hidden transition-all duration-700
        ${visible ? "reel-visible" : "opacity-0 translate-y-16"}
      `}
      style={{ backgroundColor: "var(--bg-m)" }}
    >
      <div className="web-wave reel-wave-top"></div>

      <div className="max-w-4xl mx-auto px-2 md:px-6 text-center relative z-10">

        <div className="text-center section-header-2 mb-6">
          <h2 className="text-4xl font-bold mb-2"> Create a Refreshing Reel!</h2>
          <p>
            Be the sparkle in our soda story! Join the ultimate marketing challenge
            by creating an energetic reel celebrating your favorite fizz.
            Bring your creativity, go viral, and win awesome rewards!
          </p>
        </div>

        <button className="btn-2 btn-1 mb-6">
          Join the Challenge
        </button>

        <div className="flex flex-col items-center mt-6 gap-4">
          <div className="text-center section-header-2 ">
            <h2 className="text-4xl font-bold mb-2">Need Inspiration?</h2>
            <p>
              Check out top trending reels by our soda lovers and get inspired!
              Show your twist with a fun, fresh vibe.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex  items-center gap-3 bg-green-900 text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
          >
            <FaInstagram />
            notica3030
          </a>
        </div>

      </div>

      {/* BOTTOM WAVE */}
      <div className="web-wave-bottom"></div>
    </section>
  );
}

export default CreateReelSection;
