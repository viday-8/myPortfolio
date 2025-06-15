import React from "react";
import { contactImg } from "../../assets";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[50%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Viday Tenali</h3>
        <p className="text-lg font-normal text-gray-400">Web Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
        Passionate and results-driven Frontend Developer with a strong foundation in writing clean,
         structured JavaScript code and hands-on experience building responsive,
          user-centric web applications using React. Currently seeking opportunities as a Frontend Developer
           or Software Engineer to contribute to impactful products and continue growing in a dynamic tech environment.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 6305518556</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">vidaytenali9511@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://github.com/sant0143"
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
    </div>
  );
};

export default ContactLeft;
