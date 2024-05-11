import './Work.scss';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

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
        <li className="project__item">
          <a href="httpe://Torre.ai" className="project_link" target="__blank">
            <header>
              <p>
                2024 -- present
              </p>
            </header>
            <div className="project_link_content">
              <h3 className="">
                <div>
                  <span className="" />
                  <span>
                    Senior Frontend Engineer, Accessibility
                    <span className="">
                      Klaviyo
                      <span>link icon here</span>
                    </span>
                  </span>
                </div>
              </h3>

              <p>
                Build and maintain critical components used to construct Klaviyo’s frontend,
                across the whole product. Work closely with cross-functional teams,
                including developers,
                designers, and product managers,
                to implement and advocate for best practices in web accessibility.
              </p>

              <ul className="" aria-label="Technologies used">
                <li className=""><div className="">JavaScript</div></li>
                <li className=""><div className="">TypeScript</div></li>
                <li className=""><div className="">React</div></li>
                <li className=""><div className="">Storybook</div></li>
              </ul>
            </div>
          </a>
        </li>
      </div>
    </div>
  );
};

export default Work;
