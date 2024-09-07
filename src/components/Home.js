import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import homeImg from "../assets/HelloImg.svg";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <div
        name="home"
        className="w-full h-screen text-gray-300 flex items-center justify-center pt-20 lg:pt-0"
      >

        <div className="h-full mx-auto px-8 max-w-[1200px] flex flex-col lg:flex-row">
          <div className="flex flex-col mx-auto justify-center items-center lg:items-start lg:w-2/3 p-4">
            <Fade direction="down">
              <p className="font-bold text-[25px] opacity-0 delay-0">Hi there!!!
                <span
                  className="inline-block wave"
                  role="img"
                  aria-label="waving hand"
                >
                  👋🏻
                </span>
                , I'm</p>
            </Fade>
            <Fade>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#ccd6f6] opacity-0 delay-1">
                Alok Ranjan Singh
              </h1>


              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#24ce6b] opacity-0 delay-2">
                <Typewriter
                  words={["I'm a MERN Developer"]}
                  loop={1}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  delaySpeed={2000}
                />
              </h2>
              <p className="text-[#8892b0] text-sm sm:text-md md:text-lg py-4 max-w-[700px] opacity-0 delay-3 text-center lg:text-left">
                I'm currently pursuing B.Tech from NIT Hamirpur <br />with a passion for Web Development and Problem Solving
              </p>
            </Fade>

            <div className="flex space-x-5 opacity-0 delay-4">
              <Fade direction="up" delay={300}>
                <Link to="skills" smooth={true} duration={500}>
                  <button className="text-white text-md group font-bold px-5 py-4 my-2 border-2 flex items-center hover:bg-[#24ce6b] hover:border-[#24ce6b]">
                    View Skills
                    <span className="ml-3 group-hover:rotate-90 duration-300">
                      <HiArrowNarrowRight />
                    </span>
                  </button>
                </Link>
                <Link to="projects" smooth={true} duration={500}>
                  <button className="text-white text-md group font-bold px-5 py-4 my-2 border-2 flex items-center hover:bg-[#24ce6b] hover:border-[#24ce6b]">
                    View Projects
                    <span className="ml-3 group-hover:rotate-90 duration-300">
                      <HiArrowNarrowRight />
                    </span>
                  </button>
                </Link>
              </Fade>
            </div>

          </div>

          <div className="w-full max-w-[460px] flex mx-auto">
            <Fade direction="right">
              <img src={homeImg} alt="Home Img" className="w-full h-full items-center justify-center" />
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
