import './Work.scss';
import { FaArrowDown } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import ProjectCard from '../ProjectCard/ProjectCard';
import Button from '../shared/Button/Button';
import projects from './Data/ProjectsList';

const Work = () => {
  const [length, setLength] = useState(3);

  // Google analytics
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  // ----------------
  return (
    <div>
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
            key={Math.random()}
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
    </div>
  );
};

export default Work;
