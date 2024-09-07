import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <Fade>
      <div className="w-full max-w-1000xp flex flex-col justify-center items-center text-gray-250 pt-5 pb-3">
        <div className="p-2 flex justify-center items-center">
          <a
            href="https://www.linkedin.com/in/alok-ranjan-singh-23551622b/"
            target="_blank" rel="noopener noreferrer" className="mx-2 hover:scale-110"
          >
            <FaLinkedin size={25} />
          </a>

          <a href="https://github.com/ranjan-alok1" target="_blank" rel="noopener noreferrer" className="mx-2 hover:scale-110">
            <FaGithub size={25} />
          </a>
          <a
            href="https://leetcode.com/u/ranjan__alok_/"
            target="_blank" rel="noopener noreferrer" className="mx-2 hover:scale-110"
          >
            <SiLeetcode size={25} />
          </a>
        </div>
        <div className="p-2">
          <p className="text-center">Crafted with ❤️ by <span className="text-[#24ce6b]">
            <a href="https://github.com/ranjan-alok1" target="_blank" rel="noopener noreferrer">Alok</a>
          </span></p>
        </div>
      </div>
    </Fade>
  );
};

export default Footer;