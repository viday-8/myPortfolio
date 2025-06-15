import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";

const Features = () => {
  const cardsData = [
    {title : "Scotty",
      desc : "Scotty is an enterprise-grade budgeting and project planning widget developed for global use across Dassault Systèmes. It serves as a centralized interface for initiating and managing project proposals, capturing all aspects of effort planning, resource allocation, budget estimation, and margin validation. Designed to integrate seamlessly with other tools in the internal ecosystem, it empowers project managers to plan, track, and justify project budgets at scale.",
      icon : <FaMobile />,
      height : "200px"
    },
    {title : "Booking Assistant",
      desc : "Booking Assistant is a smart bridge widget integrated with Ganttic, designed to streamline resource planning, project booking, and schedule management across multiple teams. Developed as part of the internal suite of project management tools at Dassault Systèmes.",
      icon : <SiAntdesign />,
      height : "200px"
    },
    {title : "My Talent",
      desc : "My Talent is a centralized skillset management and resource allocation widget developed to help project managers map employee capabilities to specific project needs. It acts as the foundation layer for planning and staffing within Dassault Systèmes’ ",
      icon : <FaGlobe />,
      height : "200px"
    },
     {title : "My Pages",
      desc : "My Pages is a dynamic project monitoring and review dashboard widget developed to provide real-time visibility into the status, health, and performance of projects at multiple organizational levels.",
      icon : <FaGlobe />,
      height : "200px"
    },
  ]
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I did in Dassault" />
      <div className="mdl:h-[350px]">
      <div className='flex flex-col mdl:flex-row justify-center'>
        {cardsData.map((card,index)=>
          <Card
          key={card.title}
          title={card.title}
          desc={card.desc}
          icon={card.icon}
          className = {index !== 0 ? 'mdl:-ml-20' : ''}  
          height={card.height}
        />
        )}
        
      </div>
      </div>
    </section>
  );
};

export default Features;
