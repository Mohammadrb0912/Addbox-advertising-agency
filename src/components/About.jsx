import about from '../assets/about.png'
import { FaChevronCircleRight } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'




const About = () => {

  useEffect(() => {
       AOS.init({
        offset: 200,
        duration: 400,
        easing: 'ease-in-sine',
       });
    }, [])

  return (
   <section id='about' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20 sm:px-20'>
    <div>
      <img data-aos="zoom-in" data-aos-delay="200" src={about} alt="" className='lg:w-[1000px] lg:h-[550px] ' />
    </div>
    <div data-aos="zoom-in" data-aos-delay="400" className='flex flex-col justify-center items-start gap-4' >
    <h1 className='text-lime-500  text-[19px] font-semibold '>با ما بیشتر آشنا شوید!</h1>
    <h1 className='text-black font-semibold lg:text-[60px] text-[50px] lg:leading-[70px] leading-[60px]  '>آژانس تبلیغاتی اددباکس: جایی که برند شما می‌درخشد.</h1>
    <p className=' text-[18px] text-slate-700 '>آژانس تبلیغاتی اددباکس با ترکیب خلاقیت، استراتژی و نوآوری، برند شما را به سطح جدیدی از دیده شدن می‌رساند. ما در کنار شما هستیم تا پیام کسب‌وکارتان را به بهترین شکل به مخاطبان هدف منتقل کنیم.</p>
    <div className='flex flex-col justify-center items-start gap-4'>
    <p className='text-black flex justify-center items-center gap-4  '><FaChevronCircleRight className='text-limegreen size-6'/>ما در اددباکس با خلاقیت و استراتژی، به رشد کسب‌وکار شما سرعت می‌دهیم.</p>
    <p className='text-black flex justify-center items-center gap-4  '><FaChevronCircleRight className='text-limegreen size-6'/>از طراحی ایده‌های نوآورانه تا اجرای کمپین‌های حرفه‌ای، همواره در کنارتان هستیم.</p>
    <p className='text-black flex justify-center items-center gap-4  '><FaChevronCircleRight className='text-limegreen size-6'/>اددباکس، جایی که تبلیغات شما فراتر از یک پیام به تجربه‌ای تأثیرگذار تبدیل می‌شود.</p>
    </div>
    <button className='bg-limegreen px-6 py-4 rounded-full text-[17px] font-semibold  hover:bg-black hover:text-white '>با ما بیشتر آشنا شوید</button>
    </div>
   </section>
  )
}

export default About