import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({projectInfo}) => {
  return (
    <div className="overflow-hidden w-full p-4 xl:px-12  h-20 hover:h-auto md:h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full max-h-48 group-hover:scale-110 duration-300 cursor-pointer"
          src={projectInfo.img}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {projectInfo.projectTitle}
            </h3>
            <div className="flex">
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a target="_blank" href={projectInfo.gitLink} rel="noreferrer">
                  <BsGithub />
                </a>
              </span>
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a target="_blank" rel="noreferrer" href={projectInfo.hostLink}>
                  <FaGlobe />
                </a>
              </span>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {projectInfo.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
