import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiGit,
  SiGithub,
  SiExpress,
  SiNodedotjs,
  SiNextdotjs,
} from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import { Fade } from "react-awesome-reveal";

function Techstack() {
  const icons = [
    { component: <SiHtml5 className="text-6xl md:text-8xl" />, delay: 200 },
    { component: <SiCss3 className="text-6xl md:text-8xl" />, delay: 200 },
    { component: <SiBootstrap className="text-6xl md:text-8xl" />, delay: 200 },
    { component: <SiTailwindcss className="text-6xl md:text-8xl" />, delay: 200 },
    { component: <CgCPlusPlus className="text-6xl md:text-8xl" />, delay: 400 },
    { component: <SiJavascript className="text-6xl md:text-8xl" />, delay: 400 },
    { component: <SiReact className="text-6xl md:text-8xl" />, delay: 400 },
    { component: <SiNodedotjs className="text-6xl md:text-8xl" />, delay: 400 },
    { component: <SiExpress className="text-6xl md:text-8xl" />, delay: 800 },
    { component: <SiNextdotjs className="text-6xl md:text-8xl" />, delay: 800 },
    { component: <SiMongodb className="text-6xl md:text-8xl" />, delay: 800 },
    { component: <PiFileSql className="text-6xl md:text-8xl" />, delay: 800 },
    { component: <SiGit className="text-6xl md:text-8xl" />, delay: 1000 },
    { component: <SiGithub className="text-6xl md:text-8xl" />, delay: 1000 },
  ];

  return (
    <div
      name="skills"
      className="min-h-screen flex flex-col justify-center items-center z-10 p-4"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-gray-300 flex pt-[90px] justify-center mb-8">
        <span className="text-[#24ce6b] underline">Skillset</span>
        <span className="ml-2 underline-offset-auto">I work with</span>
      </h1>
      <div className="flex flex-wrap justify-center">
        {icons.map((icon, index) => (
          <div className="w-1/2 md:w-1/3 lg:w-1/4 p-4" key={index}>
            <Fade triggerOnce delay={icon.delay}>
              <div className="shadow-md shadow-black h-full flex justify-center items-center border border-none text-gray-300 hover:text-white hover:shadow-[#24ce6b] rounded transition duration-500 ease-in-out transform hover:scale-105 p-4">
                {icon.component}
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Techstack;

