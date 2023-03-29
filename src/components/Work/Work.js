import './Work.scss';
import { FaArrowDown } from 'react-icons/fa';
import { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import Button from '../shared/Button/Button';
import projects from './Data/ProjectsList';

const Work = () => {
  const [length, setLength] = useState(3);
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
        {projects.slice(0, length).map((project) => (
          <ProjectCard
            image={project.image}
            title={project.title}
            description={project.description}
            links={project.links}
            type={project.type}
          />
        ))}
      </div>
      <div style={{ alignSelf: 'center', margin: '20px 0px' }}>
        <Button type="button" name="See More" iconComponent={<FaArrowDown />} action={() => { setLength(length + 3); }} />
      </div>
    </>
  );
};

export default Work;
