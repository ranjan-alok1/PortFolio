import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../assets/logo_nav.png"

const Navbar = () => {
  const [tap, setTap] = useState(false);
  const handleClick = () => {
    setTap(!tap);
  };

  const [color, setColor] = useState(true);

  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColor(false);
    } else {
      setColor(true);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={
        color
          ? "fixed w-full h-[90px] flex justify-between items-center px-4 text-gray-300 z-10"
          : "fixed w-full h-[90px] flex justify-between items-center px-4 text-gray-300 z-10 shadow-lg transition-all duration-500 ease-out backdrop-blur-[250px]"
      }
    >
      <div>
        {/* <img src={logo} alt="logo image" style={{ width: "50px" }} /> */}
        <Link to="home" smooth={true} duration={500} className="">
          <span className="hover:text-[#24ce6b] hover:cursor-pointer">
            <img src={logo} alt="logo" style={{ width: "150px" }}></img>
          </span>
        </Link>
      </div>

      <ul className="hidden md:flex">
        <li className="font-bold hover:text-[#24ce6b] duration-300">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="font-bold hover:text-[#24ce6b] duration-300">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="font-bold hover:text-[hsl(145,70%,47%)] duration-300">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="font-bold hover:text-[#24ce6b] duration-300">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="font-bold hover:text-[#24ce6b] duration-300">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger menu */}

      <div onClick={handleClick} className="md:hidden z-10">
        {!tap ? <FaBars className="hover:cursor-pointer" /> : <FaTimes />}
      </div>

      <ul
        className={
          !tap
            ? "absolute top-[-1000px] left-0"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[rgb(33,33,33)] duration-300]"
        }
      >
        <li className="py-6 text-4xl hover:text-[rgb(36,206,107)] duration-300">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#24ce6b] duration-300">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#24ce6b] duration-300">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#24ce6b] duration-300">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#24ce6b] duration-300">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
