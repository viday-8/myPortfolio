import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../../constants";

const Skills = () => {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm tracking-[4px] text-designColor uppercase">
            features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Development Skill</h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-6">
          {
            skillsData.map((skill, index) => {
              console.log(skill,index)
              return (
                <div key={index} className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">{skill.skillTitle}</p>
                  <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                    <motion.span
                      initial={{ x: "-100%", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      style={{ width: `${skill.skillRating}%` }}
                      className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"                    >
                      <span className="absolute -top-7 right-0">{skill.skillRating}%</span>
                    </motion.span>
                  </span>
                </div>
              )
            })
          }
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
