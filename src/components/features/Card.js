import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, desc, icon, className }) => {
  return (
    <>
    <div className={"hidden mdl:inline-flex w-[300px] px-10 h-84 py-8 rounded-lg shadow-shadowOne rotate-12  items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:w-[70%] hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024]  group z-10 hover:-translate-y-10  hover:rotate-0 hover:z-50  transition-all duration-200  " + className}>
      <div className="h-72 overflow-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-auto  flex-col justify-between">
              <span className="text-5xl font-semibold text-designColor">{title}</span>
          </div>
          <div className="flex flex-col gap-6">
            {/* <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2> */}
            <p className="base">{desc}</p>
          </div>
        </div>
      </div>
    </div>
    <div className={"mdl:hidden overflow-hidden w-[100%] px-12 h-28 py-10 rounded-lg shadow-shadowOne flex  bg-gradient-to-r from-bodyColor to-[#202327] group hover:h-auto hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024]  group z-10    hover:z-50  transition-all duration-200  " + className}>
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col   group-hover:translate-y-0 transition-transform duration-500">
          <div className=" flex flex-col justify-between">
             <div className="w-auto  flex-col justify-between">
              <span className="text-5xl font-bold text-designColor">{title}</span>
          </div>
          </div>
          <div className="flex flex-col gap-6">
            {/* <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2> */}
            <p className="base">{desc}</p>
          </div>
        </div>
      </div>
    </div></>
    
  );
};

export default Card;
