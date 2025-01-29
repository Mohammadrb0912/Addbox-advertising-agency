import herobanner from '../assets/herobanner.png'
import clients from '../assets/clients.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Hero = () => {

  useEffect(() => {
     AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
     });
  }, [])

  return (
    <section id='hero' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20 sm:px-20'>
      <div className='flex flex-col justify-center items-start gap-8'>
        <h1 data-aos="zoom-in" data-aos-delay="" className='text-black font-semibold lg:text-[90px] text-[65px] lg:leading-[100px] leading-[80px] font-mahoor' >آژانس تبلیغاتی اددباکس</h1>
        <p data-aos="zoom-in" data-aos-delay="400" className='font-mahoor text-[20px] text-slate-700'>ادباکس، جایی که تبلیغات شما به داستانی فراموش‌نشدنی تبدیل می‌شود. <br /> با خلاقیت و نوآوری، برند شما را به اوج می‌رسانیم!</p>
        <button data-aos="zoom-in" data-aos-delay="600" className='bg-limegreen px-6 py-4 rounded-full text-[17px] font-semibold font-mahoor hover:bg-black hover:text-white'>حالا شروع کنید</button>
        <div data-aos="zoom-in" data-aos-delay="600" className='flex lg:flex-row flex-col justify-center lg:items-center items-start gap-10'>
    <img src={clients} alt="" />
    <p className='font-mahoor text-[20px] font-bold text-black'>بیش از 100 برند و مشتری در سراسر ایران</p>
        </div>
      </div>
      <div>
        <img data-aos="zoom-in" data-aos-delay="1000" src={herobanner} className='lg:w-[750px] lg:h-[550px]' alt="" />
      </div>
    </section>
  )
}

export default Hero