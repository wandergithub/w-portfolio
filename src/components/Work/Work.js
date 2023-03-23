import "./Work.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import Button from "../shared/Button/Button";
import { FaArrowDown } from "react-icons/fa";
import projects from "./Data/ProjectsList";

const Work = () => {
  return (
    <>
      <div
        className="title-section text-left text-sm-center aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h1>
          my
          <span> portfolio</span>
        </h1>
        <span className="title-bg">works</span>
      </div>

      <div className="project-container">
        {projects.map((project) => {
          return (
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              links={project.links}
            />
          );
        })}
      </div>
      <div style={{ alignSelf: "center", margin: "20px 0px" }}>
        <Button name={"See More"} iconComponent={<FaArrowDown />} />
      </div>
    </>
  );
};

export default Work;
