import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "tailwindcss/tailwind.css";

import { articles } from "../export";

const Counter = () => {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-800 via-black to-gray-800 text-white py-20 rounded-3xl relative w-full sm:w-11/12 lg:w-10/12 mx-auto shadow-2xl overflow-hidden" data-aos="zoom-in" data-aos-delay="400">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/20 to-transparent z-0" />
      <div className="relative w-full max-w-7xl mx-auto rounded-3xl z-10">
        <div ref={sliderRef} id="slider" className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${index * 33.33}%)` }}>
          {[...articles, articles[0], articles[1]].map((article, i) => (
            <div
              key={i}
              className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 p-4 sm:p-6 bg-gray-900 rounded-xl shadow-lg text-center transition-transform hover:scale-105 duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src={article.image}
                alt={article.title}
                className="mx-auto rounded-lg shadow-md hover:scale-110 transition-transform duration-300"
              />
              <h1 className="text-lg sm:text-2xl md:text-3xl font-bold mt-4 sm:mt-6 text-limegreen hover:text-yellow-700 transition-colors duration-300">
                {article.title}
              </h1>
              <p className="mt-2 sm:mt-4 text-gray-300 hover:text-gray-100 transition-colors duration-300 text-sm sm:text-base md:text-lg">
                {article.description}
              </p>
              <a
                href={article.link}
                className="text-limegreen mt-4 sm:mt-6 inline-block text-sm sm:text-lg font-semibold relative hover:text-yellow-300 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                ادامه مطلب
              </a>
            </div>
          ))}
        </div>

        {/* دکمه‌های چپ و راست */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-5 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-limegreen to-green-600 text-white p-4 sm:p-5 rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-5 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-limegreen to-green-600 text-white p-4 sm:p-5 rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Counter;
