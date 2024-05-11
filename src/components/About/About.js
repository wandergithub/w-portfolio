import './About.scss';
import { Link } from 'react-router-dom';
import { GrDocumentUser } from 'react-icons/gr';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import me from './assets/me2.png';
import FloatingSocial from '../FloatingSocial/FloatingSocial';
import Button from '../shared/Button/Button';
import myPdf from './resume.pdf';

const About = ({ setCurrentPath }) => {
  useEffect(() => {
    // Google analytics
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
      <div className="about">
        <div className="me">
          <img src={me} alt="" />
        </div>
        <div className="about-content">
          <h1 className="title-1 text-uppercase">
            Wander gonzalez
            <br />
            <span>Software Engineer</span>
          </h1>
          <p className="text-p">
            <b>Driven</b>
            {' '}
            by an insatiable
            {' '}
            <b>curiosity</b>
            , I navigate the
            complexities of
            {' '}
            <b>problem-solving</b>
            {' '}
            with
            a blend of
            {' '}
            <b>critical thinking</b>
            {' '}
            and relentless
            {' '}
            <b>hard work</b>
            .
            <br />
            <Link
              to="/contact"
              style={{ textDecoration: 'none', color: '#ffb400' }}
              onClick={() => { setCurrentPath('/contact'); }}
            >
              {' '}
              Get in touch!
            </Link>
          </p>
          <a
            href={myPdf}
            target="_blank"
            rel="noreferrer"
          >
            <Button
              name="Resume"
              type="button"
              iconComponent={<GrDocumentUser />}
            />
          </a>
        </div>
      </div>
      <FloatingSocial />
    </div>
  );
};

About.propTypes = {
  setCurrentPath: PropTypes.func.isRequired,
};

export default About;
