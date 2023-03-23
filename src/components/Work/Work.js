import "./Work.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import image1 from "./Assets/portfolio-6.webp";
import Button from "../shared/Button/Button";
import { FaArrowDown } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";
import { GoBrowser } from "react-icons/go";

const projects = [
  {
    title: "E-commerce",
    image: image1,
    description:
      "Completely responsive E-commerce web page. build with React/Redux and MaterialUI-styled-components. This allows the user to navigate through different categories of items, filter them by category and add them to the shopping cart.",
    links: [
      {
        image:  <TbBrandGithub title="Github icon" size={"2em"} />,
        href: "https://github.com/wandergithub/e-commerce",
      },
      {
        image: <GoBrowser title="Live demo icon" size={"2em"} />,
        href: "https://wandergithub.github.io/e-commerce/",
      },
    ],
  },
  {
    title: "E-commerce",
    image: image1,
    description:
      "Completely responsive E-commerce web page. build with React/Redux and MaterialUI-styled-components. This allows the user to navigate through different categories of items, filter them by category and add them to the shopping cart.",
    links: [
      {
        image:  <TbBrandGithub title="Github icon" size={"2em"} />,
        href: "https://github.com/wandergithub/e-commerce",
      },
      {
        image: <GoBrowser title="Live demo icon" size={"2em"} />,
        href: "https://wandergithub.github.io/e-commerce/",
      },
    ],
  },
  {
    title: "E-commerce",
    image: image1,
    description:
      "Completely responsive E-commerce web page. build with React/Redux and MaterialUI-styled-components. This allows the user to navigate through different categories of items, filter them by category and add them to the shopping cart.",
    links: [
      {
        image:  <TbBrandGithub title="Github icon" size={"2em"} />,
        href: "https://github.com/wandergithub/e-commerce",
      },
      {
        image: <GoBrowser title="Live demo icon" size={"2em"} />,
        href: "https://wandergithub.github.io/e-commerce/",
      },
    ],
  },
];

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
          <span>portfolio</span>
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
