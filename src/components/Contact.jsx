import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import mahram from "../assets/mahram.png";
import bijan from "../assets/bijan.png";
import ayande from "../assets/ayande.png";
import parjak from "../assets/parjak.png";
import khoshbakht from "../assets/khoshbakht.png";
import mihan from "../assets/mihan.png";
import dorto from "../assets/dorto.png";
import izipik from "../assets/izipik.png";
import yekoyek from "../assets/yekoyek.png";
import tabiat from "../assets/tabiat.png";

const clients = [
  mahram, bijan, ayande, parjak, khoshbakht, mihan, dorto, izipik, yekoyek, tabiat
];

const Clients = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 1200,
      easing: 'ease-in-out',
      delay: 300,
      once: true,
    });
  }, []);

  return (
    <section id='contact' className="w-[90%] m-auto flex flex-col items-center gap-16 py-20 sm:px-20 bg-gradient-to-b from-white to-gray-100 rounded-3xl shadow-xl">
      <div data-aos="fade-up" data-aos-delay="500" className="text-center">
        <h2 className="text-limegreen text-[22px] font-semibold">مشتریان ما</h2>
        <h1 className="text-black font-semibold lg:text-[60px] text-[50px] leading-[70px] mt-4">برندهایی که به ما اعتماد کرده‌اند</h1>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4 text-lg font-medium">
          ما افتخار همکاری با برخی از شناخته‌شده‌ترین برندها و شرکت‌ها را داریم. اعتماد این برندها به ما، نتیجه ارائه راهکارهای خلاقانه و هدفمند است.
        </p>
      </div>
      
      {/* Grid Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 w-full max-w-6xl">
        {clients.map((logo, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={(index % 5) * 250 + 400}
            className="flex items-center justify-center p-8 border-2 border-gray-300 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all transform hover:scale-110 hover:bg-gray-50"
          >
            <img src={logo} alt="Client Logo" className="max-w-[160px] h-auto transition-all duration-300 filter grayscale hover:grayscale-0" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;