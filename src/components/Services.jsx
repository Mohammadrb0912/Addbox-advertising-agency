import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { servicesinfo, sectionTwoInfo, sectionThreeInfo } from "../export";

const Services = () => {
  useEffect(() => {
    // تنظیم AOS
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-out",
    });
  }, []);

  const renderSection = (info, sectionTitle, sectionDesc) => (
    <section id="services" className="w-full py-16 bg-black">
      <div className="w-full text-center mb-12">
        <h1
          className="text-white text-[36px] lg:text-[48px] font-extrabold font-mahoor tracking-wide leading-tight"
          data-aos="zoom-in"
        >
          {sectionTitle}
        </h1>
        <p
          className="text-slate-400 text-[18px] lg:text-[20px] mt-4"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          {sectionDesc}
        </p>
      </div>

      <div className="w-[90%] m-auto flex flex-wrap justify-between items-start gap-0">
        {info.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-center gap-6 p-8 w-full lg:w-1/3 border-l border-gray-700 first:border-l-0"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-28 h-28 object-contain"
            />
            <h1 className="text-[22px] lg:text-[26px] text-white font-bold font-mahoor">
              {item.title}
            </h1>
            <p className="text-[15px] lg:text-[17px] text-slate-300 font-mahoor leading-6">
              {item.about}
            </p>
            <button className="text-lime-500 font-semibold flex items-center gap-2 text-[16px]">
              {item.label} <FaArrowRight />
            </button>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <>
      {renderSection(
        servicesinfo,
        "خدمات دیجیتال مارکتینگ",
        "بهترین راهکارها برای رشد برند شما"
      )}
      {renderSection(
        sectionTwoInfo,
        "طراحی و تولید محتوا",
        "راه‌حل‌های خلاقانه برای طراحی گرافیکی و تولید محتوای برند شما"
      )}
      {renderSection(
        sectionThreeInfo,
        "تکنولوژی و فناوری",
        "بهترین خدمات تبلیغاتی برای دستیابی به مشتریان جدید"
      )}
    </>
  );
};

export default Services;
