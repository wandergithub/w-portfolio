import './About.scss';
import { Link } from 'react-router-dom';
import { GrDocumentUser } from 'react-icons/gr';
import me from './assets/me.webp';
import FloatingSocial from '../FloatingSocial/FloatingSocial';
import Button from '../shared/Button/Button';

const About = () => (
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
          i&apos;m Wander gonzalez.
          <br />
          <span>Web Developer</span>
        </h1>
        <p className="text-p">
          I am a full-stack web developer. I am an expert in persisting towards
          my objectives and doing what&apos;s needed to go a step further. I am used
          to facing difficult problems and new challenges every day. I love
          technology and computer science. I am disciplined in my work, as I am
          in exercising and developing mentally and fiscally every day. If you
          want to work together, feel free to
          <Link to="/contact" style={{ textDecoration: 'none', color: '#ffb400' }}> contact me!</Link>
        </p>
        <a
          href="https://docs.google.com/document/d/1WpT8wFZMX6YKyg4YN3l6hYIXNqSo1xpdtLb_zSInrt8/edit?usp=sharing"
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

export default About;
