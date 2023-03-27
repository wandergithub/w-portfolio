import "./Lab.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "./Data/projects";
import Button from "../shared/Button/Button";
import { FaArrowDown } from "react-icons/fa";

const Lab = () => {
  return (
    <>
      <div
        className="title-section text-left text-sm-center aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h1>
          Code
          <span> Lab</span>
        </h1>
        <span className="title-bg bg-large">Laboratory</span>
      </div>
      <p className="text-p" style={{ maxWidth: "70%", alignSelf: "center" }}>
        ReactJS/Web Components, blogs, fun coding and everything else
        accomplished on my spare software development time.
      </p>
      <div className="project-container">
        {projects.map((project) => {
          return (
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                links={project.links}
                type={project.type}
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

export default Lab;
