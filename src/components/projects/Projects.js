import { projectsData } from "../../constants";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black font-titleFont"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PROJECTS" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projectsData.map((project, index) => {
          return (
            <ProjectsCard
              key={index}
              projectInfo={project}
            />
          )
        })}
      </div>
    </section>
  );
};

export default Projects;
