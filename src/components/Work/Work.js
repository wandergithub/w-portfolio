import "./Work.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import image1 from "./Assets/portfolio-6.webp";

const projects = [
  {
    title: "E-commerce",
    image: image1,
    description:
      "Completely responsive E-commerce web page. build with React/Redux and MaterialUI-styled-components. This allows the user to navigate through different categories of items, filter them by category and add them to the shopping cart.",
    links: [{ image: "icon image here", href: "link url here" }],
  },
  {
    title: "E-commerce",
    image: image1,
    description:
      "Completely responsive E-commerce web page. build with React/Redux and MaterialUI-styled-components. This allows the user to navigate through different categories of items, filter them by category and add them to the shopping cart.",
    links: [{ image: "icon image here", href: "link url here" }],
  },
  {
    title: "E-commerce",
    image: image1,
    description:
      "Completely responsive E-commerce web page. build with React/Redux and MaterialUI-styled-components. This allows the user to navigate through different categories of items, filter them by category and add them to the shopping cart.",
    links: [{ image: "icon image here", href: "link url here" }],
  },
];

const Work = () => {
  return (
    <>
      <div
        class="title-section text-left text-sm-center aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h1>
          my
          <span>portfolio</span>
        </h1>
        <span class="title-bg">works</span>
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
    </>
  );
};

export default Work;
