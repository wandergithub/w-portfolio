import './Work.scss';
import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { CgExternal } from 'react-icons/cg';
import projects from './Data/ProjectsList';

const Work = () => {
  // Google analytics
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
      <h2 className="project__subtitle">Experience</h2>
      <div className="project-container">
        {projects.map((item) => (
          <li className="project__item" key={item}>
            <a href="httpe://Torre.ai" className="project_link" target="__blank">
              <header>
                <p>
                  {item.from}
                  {' '}
                  ─
                  {' '}
                  {item.to}
                </p>
              </header>
              <div className="project_link_content">
                <h3>
                  <div>
                    <span />
                    <span>
                      {item.title}
                      ,
                      {' '}
                      <span>
                        {item.company}
                        {' '}
                        <span className="shareIcon">
                          <CgExternal />
                        </span>
                      </span>
                    </span>
                  </div>
                </h3>

                <p>
                  {item.description}
                </p>

                <ul aria-label="Technologies used">
                  {item.tech.map((tool) => (
                    <li key={tool}><div>{tool}</div></li>
                  ))}
                </ul>
              </div>
            </a>
          </li>
        ))}

      </div>
    </div>
  );
};

export default Work;
