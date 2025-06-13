import { path } from "framer-motion/client";
import React, { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";

import logo from "../assets/img/logo1-removebg.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItem = [
    {
      link: "Home",
      path: "hero",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Why Us",
      path: "services",
    },
    {
      link: "Products",
      path: "products",
    },
    {
      link: "Working",
      path: "working",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];

  return (
    <nav className="w-full flex bg-white justify-between items-center gap-1 lg:px-16 px-6 py-0 sticky top-0 z-50 border-yellow-500 border-b-[1px]">
      <h1 className="text-black md:text-4xl text-3xl font-bold font-rubik">
        {/* PMT <span className="text-yellow-500 italic">Steels</span> */}
        <img
          src={logo}
          className="h-[100px] w-[160px] text-black filter brightness-0 contrast-200 saturate-[1.3]"
          alt=""
        />
      </h1>
      <ul className="lg:flex justify-center items-center gap-6 hidden">
        {navItem.map(({ link, path }) => (
          <Link
            key={path}
            className="text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-yellow-500 hover:text-black text-[15px]"
            to={path}
            spy={true}
            offset={-100}
            activeClass="active-nav"
            smooth={true}>
            {link}
          </Link>
        ))}
      </ul>
      {/* mobile menu */}
      <div
        className="flex justify-between items-center lg:hidden mt-3"
        onClick={toggleMenu}>
        <div>
          {isMenuOpen ? (
            <FaXmark className="text-black text-3xl cursor-pointer" />
          ) : (
            <FaBars className="text-black text-3xl cursor-pointer" />
          )}
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full h-fit bg-yellow-500 p-4 absolute top-[72px] left-0`}
        onClick={closeMenu}>
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItem.map(({ link, path }) => (
            <Link
              key={path}
              className="text-black uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white text-center w-full"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}>
              {link}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Header;
