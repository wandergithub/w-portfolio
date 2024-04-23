import './FloatingSocial.scss';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

const FloatingSocial = () => (
  <div className="icons-container">
    <a href="https://www.linkedin.com/in/wander-gonzalez/" target="_blank" style={{ backgroundColor: '#0e76a8' }} rel="noreferrer">
      <FaLinkedinIn size="2em" color="white" />
    </a>
    <a href="https://github.com/wandergithub" target="_blank" style={{ backgroundColor: '#4e545a' }} rel="noreferrer">
      <BsGithub size="2em" color="white" />
    </a>
    <a href="https://leetcode.com/wandergithub/" target="_blank" style={{ backgroundColor: '#ffb400' }} rel="noreferrer">
      <SiLeetcode size="2em" color="black" />
    </a>
  </div>
);

export default FloatingSocial;
