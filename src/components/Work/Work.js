/* eslint-disable jsx-a11y/media-has-caption */

import './Work.scss';
import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { CgExternal } from 'react-icons/cg';
import { experience, project } from './Data/ProjectsList';

const Work = () => {
  // Google analytics
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div
      style={{
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
        {experience.map((item) => (
          <li className="project__item" key={item}>
            <a
              href={item.linkToCompany}
              className="project_link"
              target={item.linkToCompany === '' ? '_self' : '_blank'}
              rel="noreferrer"
            >
              <header>
                <p>
                  {item.from}
                  {' '}
                  ─
                  {' '}
                  +
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

                <p>{item.description}</p>

                <ul aria-label="Technologies used">
                  {item.tech.map((tool) => (
                    <li key={tool}>
                      <div>{tool}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </li>
        ))}
        <h2 className="project__subtitle" style={{ margin: '45px 0' }}>
          Projects
        </h2>
        {project.map((item) => (
          <li className="project__item" key={item}>
            <a
              href={item.linkToCompany}
              className="project_link"
              target={item.linkToCompany === '' ? '_self' : '_blank'}
              rel="noreferrer"
              onClick={item.linkToCompany ? '' : (e) => e.preventDefault()}
            >
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

                <p>{item.description}</p>
                <video width="320" height="320" style={{ margin: '20px' }} controls autoPlay loop muted>
                  <source src={item.video} type="video/mp4" />
                </video>
                <ul aria-label="Technologies used">
                  {item.tech.map((tool) => (
                    <li key={tool}>
                      <div>{tool}</div>
                    </li>
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
