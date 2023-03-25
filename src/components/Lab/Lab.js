import "./Lab.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "./Data/projects";
import Button from "../shared/Button/Button";
import { FaArrowDown } from "react-icons/fa";

const Lab = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
      }}
    >
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
      <p className="text-p" style={{ maxWidth: "70%" }}>
        ReactJS/Web Components, blogs, fun coding and everything else
        accomplished on my spare software development time.
      </p>
      <ul className="project-container">
        {projects.map((project) => {
          return (
            <li>
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                links={project.links}
              />
            </li>
          );
        })}
      </ul>
      <div style={{ alignSelf: "center", margin: "20px 0px" }}>
        <Button name={"See More"} iconComponent={<FaArrowDown />} />
      </div>
    </div>
  );
};

export default Lab;
