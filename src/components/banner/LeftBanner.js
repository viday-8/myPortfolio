import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiWebpack, SiJavascript, SiReactquery, SiRedux, SiTypescript, SiNodedotjs } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words:  [
      "Frontend Developer",
      "UI Developer",
      "UX/UI Engineer",
      "Interactive Web Developer",
      "JavaScript Developer",
      "React Developer",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20 ml-5">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Viday</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
         Creative and detail-oriented Frontend Developer with 3+ years of experience building responsive, modular and high-performance user interfaces using React.js, JavaScript, HTML, and CSS. Skilled in transforming complex requirements into user-friendly, accessible designs and performance. Actively engaged in the tech community through conducting frontend workshops, mentoring participants in hackathons, and leading technical interviews.
        </p>
      </div>
      <div className="grid md:grid-flow-col gap-6 lgl:gap-0 justify-between">
        <div className="mb-4 md:col-span-">
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a
                href="https://github.com/viday-8"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://www.linkedin.com/in/viday-tenali/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>
        <div className="md:ml-10 md:col-span-2">
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="grid grid-flow-row grid-cols-4 gap-4">
            <span className="bannerIcon ">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiTypescript  />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiReactquery  />
            </span>
            <span className="bannerIcon">
              <SiRedux   />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
