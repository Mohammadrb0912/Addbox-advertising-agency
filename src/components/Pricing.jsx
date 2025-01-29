import { FaChevronCircleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="plans" className="w-[90%] m-auto flex flex-col justify-between items-center gap-8 py-20 relative">
      {/* ✨ پس‌زمینه افکت نور */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[150px] bg-gradient-to-r from-lime-400 via-lime-600 to-lime-400 blur-2xl opacity-20"></div>

      {/* 🔥 عنوان اصلی */}
      <h1
        data-aos="fade-down"
        className="text-lime-500 font-mahoor text-[22px] font-semibold uppercase tracking-widest bg-black px-4 py-2 rounded-lg shadow-lg"
      >
        ✨ مسیر موفقیت برند شما
      </h1>

      {/* ⭐ متن توضیحی */}
      <h1
        data-aos="fade-up"
        className="text-black font-extrabold lg:text-[48px] text-[36px] lg:leading-[60px] leading-[50px] text-center font-mahoor bg-gradient-to-r from-lime-400 to-black text-transparent bg-clip-text"
      >
        🌟 ما فقط تبلیغ نمی‌کنیم، ما برند شما را می‌سازیم!
      </h1>

      {/* 🟢 سه باکس حرفه‌ای */}
      <div data-aos="zoom-in" className="w-full flex lg:flex-row flex-col justify-between items-center gap-6 mt-10">

        {/* 🔍 باکس ۱ */}
        <div className="relative group bg-black p-12 rounded-3xl flex flex-col justify-center items-start gap-6 lg:w-[30%] w-full h-full border-2 border-lime-500 transition-all duration-500 hover:shadow-2xl hover:scale-105">
          {/* ✨ افکت نور بالای باکس */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[80px] h-[5px] bg-lime-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

          {/* 🎯 عنوان */}
          <div className="w-full flex justify-center">
            <h1 className="text-lime-500 text-3xl font-extrabold font-mahoor text-center uppercase tracking-wide">
              📊 کشف و استراتژی‌سازی
            </h1>
          </div>

          {/* ✅ لیست موارد */}
          <div className="flex flex-col justify-center items-start gap-5 flex-grow">
            {[
              "🔍 تحلیل بازار و رقبا برای یافتن بهترین مسیر رشد.",
              "📊 بررسی رفتار مشتریان و شناخت نیازهای آن‌ها.",
              "🎯 تعیین اهداف کلیدی برند برای دستیابی به بهترین نتایج.",
              "📌 طراحی نقشه راه اختصاصی بر اساس داده‌های واقعی.",
              "💡 شناسایی فرصت‌های طلایی در دنیای دیجیتال.",
              "📈 تحلیل عملکرد فعلی برند برای کشف نقاط قوت و ضعف.",
              "🚀 ایجاد استراتژی رشد پایدار برای توسعه بلندمدت."
            ].map((item, index) => (
              <p key={index} className="text-white flex justify-start items-center gap-3 font-mahoor text-lg leading-relaxed">
                <FaChevronCircleRight className="text-lime-500 size-6" /> {item}
              </p>
            ))}
          </div>
        </div>

        {/* 🎨 باکس ۲ */}
        <div className="relative group bg-black p-12 rounded-3xl flex flex-col justify-center items-start gap-6 lg:w-[30%] w-full h-full border-2 border-lime-500 transition-all duration-500 hover:shadow-2xl hover:scale-105">
          {/* ✨ افکت نور بالای باکس */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[80px] h-[5px] bg-lime-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

          {/* 🎯 عنوان */}
          <div className="w-full flex justify-center">
            <h1 className="text-lime-500 text-3xl font-extrabold font-mahoor text-center uppercase tracking-wide">
              🎨 خلق و اجرای خلاقانه
            </h1>
          </div>

          {/* ✅ لیست موارد */}
          <div className="flex flex-col justify-center items-start gap-5 flex-grow">
            {[
              "🎨 طراحی و تولید محتوای اختصاصی برای تعامل بیشتر.",
              "📢 راه‌اندازی کمپین‌های دیجیتال برای گسترش برند.",
              "🛠 توسعه وب‌سایت و اپلیکیشن برای تجربه کاربری بهتر.",
              "🌟 برندسازی حرفه‌ای با هویت بصری منحصربه‌فرد.",
              "📷 عکاسی و تولید ویدئو برای ایجاد محتوای تأثیرگذار.",
              "🔍 مدیریت شبکه‌های اجتماعی برای ارتباط مداوم با مخاطبان.",
              "🚀 انتشار تبلیغات هدفمند در بسترهای دیجیتال."
            ].map((item, index) => (
              <p key={index} className="text-white flex justify-start items-center gap-3 font-mahoor text-lg leading-relaxed">
                <FaChevronCircleRight className="text-lime-500 size-6" /> {item}
              </p>
            ))}
          </div>
        </div>

        {/* 📈 باکس ۳ */}
        <div className="relative group bg-black p-12 rounded-3xl flex flex-col justify-center items-start gap-6 lg:w-[30%] w-full h-full border-2 border-lime-500 transition-all duration-500 hover:shadow-2xl hover:scale-105">
          {/* ✨ افکت نور بالای باکس */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[80px] h-[5px] bg-lime-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

          {/* 🎯 عنوان */}
          <div className="w-full flex justify-center">
            <h1 className="text-lime-500 text-3xl font-extrabold font-mahoor text-center uppercase tracking-wide">
              📈 رشد و بهینه‌سازی
            </h1>
          </div>

          {/* ✅ لیست موارد */}
          <div className="flex flex-col justify-center items-start gap-5 flex-grow">
            {[
              "📊 پایش مداوم داده‌ها برای بهبود استراتژی‌های بازاریابی.",
              "🔄 آزمایش و بهینه‌سازی تبلیغات برای افزایش بازدهی.",
              "🚀 تحلیل رفتار کاربران و بهبود نرخ تبدیل (CRO).",
              "📢 استفاده از تست‌های A/B برای افزایش اثربخشی تبلیغات.",
              "📈 تقویت سئو و بهینه‌سازی سایت برای دیده شدن بیشتر.",
              "💰 مدیریت بودجه تبلیغات برای بالاترین نرخ بازگشت سرمایه.",
              "🌍 توسعه استراتژی‌های جدید برای رشد پایدار برند."
            ].map((item, index) => (
              <p key={index} className="text-white flex justify-start items-center gap-3 font-mahoor text-lg leading-relaxed">
                <FaChevronCircleRight className="text-lime-500 size-6" /> {item}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;