import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { MdManageAccounts } from "react-icons/md";

const Features = () => {
  const cardsData = [
    {title : "Scotty",
      desc : "Scotty is an enterprise-grade budgeting and project planning widget developed for global use across Dassault Systèmes. It serves as a centralized interface for initiating and managing project proposals, capturing all aspects of effort planning, resource allocation, budget estimation, and margin validation. Designed to integrate seamlessly with other tools in the internal ecosystem, it empowers project managers to plan, track, and justify project budgets at scale.",
      icon : "S",
      height : "200px"
    },
    {title : "Booking Assistant",
      desc : "Booking Assistant is a smart bridge widget integrated with Ganttic, designed to streamline resource planning, project booking, and schedule management across multiple teams. Developed as part of the internal suite of project management tools at Dassault Systèmes, it helps project managers efficiently allocate resources, avoid scheduling conflicts, and synchronize project updates with real-time planning tools.",
      icon : "B",
      height : "200px"
    },
    {title : "My Talent",
      desc : "My Talent is a centralized skillset management and resource allocation widget developed to help project managers map employee capabilities to specific project needs. It acts as the foundation layer for planning and staffing within Dassault Systèmes’ internal ecosystem, enabling better resource visibility, skill forecasting, and effort planning.",
      icon : "T",
      height : "200px"
    },
     {title : "My Pages",
      desc : "My Pages is a dynamic project monitoring and review dashboard widget developed to provide real-time visibility into the status, health, and performance of projects at multiple organizational levels. It empowers project managers, team leads, and upper management to make informed decisions based on comprehensive KPIs, risks, and milestone data.",
      icon : "P",
      height : "200px"
    },
    {title : "Hyundai Ioniq 6 - Art Configurator",
      desc : "The Art Configurator for the Hyundai Ioniq 6 is an interactive, studio-like web application developed as part of the 3DEXCITE Create and Show platform. It enables users to visually customize the car’s appearance in a realistic 3D environment, adjusting lighting, camera angles, and visual variants, and exporting high-resolution 4K renders.",
      icon : "H",
      height : "200px"
    },
  ]
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Featured Projects" des="What I did in Dassault" />
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
