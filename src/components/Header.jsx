import { useState } from "react";
import { FaXmark, FaBars, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: "خانه", path: "home" },
    { link: "درباره ما", path: "about" },
    { link: "خدمات", path: "services" },
    { link: "طرح‌ها", path: "plans" },
    { link: "داستان‌های مشتریان", path: "testimonials" },
    { link: "مشتریان‌ما", path: "contact" },
  ];

  return (
    <nav className="w-full flex bg-black justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50 shadow-lg">
      <h1 className="text-white md:text-4xl text-3xl font-bold ">
        ادد<span className="text-limegreen italic">باکس</span>
      </h1>

      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-limegreen hover:text-black  text-[15px] transition-all duration-300"
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>

      <button className="bg-limegreen  hover:bg-white text-black px-11 py-3 rounded-full font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden flex-row items-center gap-2">
        <FaWhatsapp className="text-black text-[20px]" />
        <a href="https://wa.me/989127221655" target="_blank" rel="noopener noreferrer">ارتباط با ما</a>
      </button>

      {/* منو استارت موبایل */}
      <div className="flex justify-center items-center lg:hidden mt-3" onClick={toggleMenu}>
        <div>
          {isMenuOpen ? (
            <FaXmark className="text-white text-3xl cursor-pointer" />
          ) : (
            <FaBars className="text-white text-3xl cursor-pointer" />
          )}
        </div>
      </div>
      
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full h-fit bg-black p-4 absolute top-[72px] left-0 shadow-lg`}
        onClick={closeMenu}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-limegreen hover:text-black w-full text-center transition-all duration-300"
              to={path}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
