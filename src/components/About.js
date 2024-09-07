import React from "react";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <>
      <div name="about" className="mt-[125px]">

        <div className="flex pt-20 items-center justify-center scroll-mt-32 mt-[125px]">
          <Fade direction="down">
            <h1 className="text-5xl pt-5 text-[#24ce6b] font-bold border-b-4 border-[#24ce6b] inline-block text-center">
              About Me
            </h1>
          </Fade>
        </div>

        <div className="w-full py-20 text-gray-300 flex justify-center items-center">
          <div className="max-w-[1000px]  w-full px-4 ">
            <Fade cascade direction="left" damping={0.1}>
              <p className="text-[1.40rem]">
                Hi, I'm <span className="text-[#24ce6b]">Alok</span>.
                <br /> I'm currently pursuing my B.Tech in Electronics and
                Communication Engineering from the <span className="text-[#24ce6b]">NIT Hamirpur</span>.
              </p>
              <br />
              <p className="text-[1.40rem]">
                With a passion for web development, I am a
                proficient developer capable of designing and developing complex
                applications with expertise in <span className="text-[#24ce6b]">React</span> and <span className="text-[#24ce6b]"> Node.js</span>.
              </p>
              <br />
              <p className="text-[1.40rem]">
                I enjoy programming because it requires me to solve problems, and I'm always looking for new challenges to hone my analytical    and creative thinking abilities.
              </p>
              <br />
              <p className="text-[1.40rem]">
                I am strongly interested in learning new technologies and
                implementing them in my projects. I'm a self-motivated and
                hardworking individual who is always ready to learn new things and
                work in a team.
              </p>
              <br />
              <p className="text-[1.40rem]">
                Outside of coding and academics, I enjoy reading
                novels and playing cricket.
              </p>
            </Fade>
          </div>

          {/* <div className="max-w-[400px]  w-full px-4 text-center">
            <Fade direction="right">
              <img src={logo} alt="about img" rel="noopener noreferrer" />
            </Fade>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default About;
