import './Lab.scss';
import { FaArrowDown } from 'react-icons/fa';
import { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import projects from './Data/projects';
import Button from '../shared/Button/Button';

const Lab = () => {
  const [length, setLength] = useState(3);
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
      <p className="text-p" style={{ maxWidth: '70%', alignSelf: 'center' }}>
        ReactJS/Web Components, blogs, fun coding and everything else
        accomplished on my spare software development time.
      </p>
      <div className="project-container">
        {projects.slice(0, length).map((project) => (
          <ProjectCard
            key={Math.random()}
            image={project.image}
            title={project.title}
            description={project.description}
            links={project.links}
            type={project.type}
          />
        ))}
      </div>
      <div
        style={{ alignSelf: 'center', margin: '20px 0px' }}
      >
        <Button
          type="button"
          name="See More"
          iconComponent={<FaArrowDown />}
          action={() => {
            setLength(length + 3);
          }}
        />
      </div>
    </>
  );
};

export default Lab;
