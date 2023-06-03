import './Work.scss';
import { FaArrowDown } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import { ToastContainer, toast } from 'react-toastify';
import ProjectCard from '../ProjectCard/ProjectCard';
import Button from '../shared/Button/Button';
import projects from './Data/ProjectsList';
import 'react-toastify/dist/ReactToastify.css';

const Work = () => {
  const [length, setLength] = useState(3);

  // Google analytics
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const noMoreItems = () => (toast.warn('No more projects! \n', {
    position: 'bottom-left',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  }));

  function showMoreItems(currentNumber) {
    if (currentNumber < projects.length) {
      setLength(length + 1);
    } else {
      noMoreItems();
    }
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '40px',
    }}
    >
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
        <Button type="button" name="See More" iconComponent={<FaArrowDown />} action={() => { showMoreItems(length); }} />
        <ToastContainer
          position="bottom-left"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
};

export default Work;
