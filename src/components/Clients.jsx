import Slider from "react-slick";
import testimonial from "../assets/testimonial.png";
import { FaQuoteLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { testidata } from "../export";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clients = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-out",
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section
      id="testimonials"
      className="w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-20 py-16"
    >
      <div className="lg:w-[50%] w-full">
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          src={testimonial}
          alt="testimonial"
          className="lg:w-[1000px] lg:h-[550px] rounded-lg"
        />
      </div>
      <div className="lg:w-[50%] w-full flex flex-col justify-center lg:items-start items-center gap-6">
        <h1
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-lime-600 font-semibold text-[18px] uppercase tracking-widest"
        >
          همکاری‌هایی که به موفقیت تبدیل شدند
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-black font-bold lg:text-[50px] text-[40px] lg:leading-[60px] leading-[50px] text-center lg:text-left"
        >
          روایت تجربه مشتریان از همکاری با ادباکس
        </h1>

        <div data-aos="fade-up" data-aos-delay="700" className="w-full mt-8">
          <Slider {...settings}>
            {testidata.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg flex flex-col gap-4 border border-gray-200"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-lime-500 p-4 rounded-full">
                    <FaQuoteLeft className="text-white text-[30px]" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {item.brand}
                  </h2>
                </div>

                <div className="flex flex-col gap-4 mt-4">
                  <p className="text-lg text-gray-600">
                    <span className="font-bold text-black">چالش: </span>
                    {item.challenge}
                  </p>
                  <p className="text-lg text-gray-600">
                    <span className="font-bold text-black">راه‌حل ادباکس: </span>
                    {item.solution}
                  </p>
                  <p className="text-lg text-gray-600">
                    <span className="font-bold text-black">نتیجه: </span>
                    {item.result}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Clients;
