import { FaMapMarkedAlt, FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaArrowUp } from "react-icons/fa"
import { FaPhoneVolume } from "react-icons/fa6"
import { IoIosMailOpen } from "react-icons/io"
import { IoTime } from "react-icons/io5"
import { Link } from "react-scroll"






const Footer = () => {
  return (
    <>
      <section className="w-full bg-black m-auto grid lg:grid-cols-3 grid-cols-1 justify-between items-start lg:gap-28 gap-16 lg:p-20 p-10">
      <div className="flex flex-col justify-center items-start gap-10">
        <h1 className="text-white font-semibold font-mahoor text-[40px] leading-[50px] ">تحولی تازه در تبلیغات و برندینگ شما</h1>
        <button className="bg-limegreen px-6 py-4 rounded-full text-[17px] font-semibold font-mahoor hover:bg-white hover:text-black ">همین حالا شروع کنید</button>
      </div>
      <div className="flex flex-col justify-center items-start gap-10">
        <h1 className="text-white text-2xl font-mahoor font-semibold">اطلاعات تماس</h1>
          <div className="flex flex-col justify-center items-start gap-4">
            <p className="flex justify-center items-center gap-3"><FaMapMarkedAlt className="text-limegreen size-8 "/><span className="text-[16px] font-mahoor text-slate-100 ">ایران، تهران، خیابان آیت‌الله کاشانی</span></p>
            <p className="flex justify-center items-center gap-3"><FaPhoneVolume className="text-limegreen size-8 "/><span className="text-[16px] font-mahoor text-slate-100 ">+989127221655</span></p>
            <p className="flex justify-center items-center gap-3"><IoIosMailOpen className="text-limegreen size-8 "/><span className="text-[16px] font-mahoor text-slate-100 ">addbox@gmail.com</span></p>
            <p className="flex justify-center items-center gap-3"><IoTime className="text-limegreen size-8 "/><span className="text-[16px] font-mahoor text-slate-100 ">06:00 - 23:00</span></p>
          </div>
      </div>
      <div className="flex flex-col justify-center items-start gap-6">
        <h1 className="text-white text-2xl font-semibold font-mahoor ">!به تیم حرفه‌ای ادباکس بپیوندید</h1>
        <p className="text-[16px] font-mahoor text-slate-100  ">اگر به دنبال رشد و کار در یک محیط خلاق و پویا هستید، ما همیشه مشتاق همکاری با استعدادهای جدید هستیم</p>
        <button className="bg-limegreen px-6 py-4 rounded-full text-[17px] font-semibold font-mahoor hover:bg-white hover:text-black "><a href="">مشاهده فرصت‌های شغلی</a></button>
      </div>
      </section>
      <section className="w-full bg-black m-auto border-y-2 border-slate-600 grid lg:grid-cols-3 grid-cols-1 justify-between items-center lg:gap-28 gap-8 px-20 py-6 ">
      <div>
        <h1 className="text-white text-[17px] font-mahoor text-center ">۱۴۰۳ - ۲۰۲۵ ادباکس | تمامی حقوق این وب‌سایت محفوظ است.</h1>
      </div>
      <div>
        <p className=" text-white text-3xl text-center font-mahoor font-bold ">Add<span className="text-limegreen italic">Box</span></p>
      </div>
      <div className="flex lg:justify-end justify-center items-center gap-4 ">
        <FaFacebook className="text-limegreen size-6"/>
        <FaTwitter className="text-limegreen size-6"/>
        <FaInstagram className="text-limegreen size-6"/>
        <FaYoutube className="text-limegreen size-6"/>
      </div>
      </section>
      <div id="icon-box" className="bg-limegreen text-black p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6 ">
      <Link to="hero" spy={true} offset={-100} smooth={true} ><FaArrowUp className="w-[35px] h-[35px] "/></Link>
      </div>
    </>
  )
}

export default Footer