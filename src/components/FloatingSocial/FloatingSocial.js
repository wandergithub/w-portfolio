import './FloatingSocial.scss';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { SiLeetcode, SiMedium } from 'react-icons/si';
import { GrInstagram, GrTwitter } from 'react-icons/gr';

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
    <a href="https://medium.com/@wandergonzalez0" target="_blank" style={{ backgroundColor: 'black' }} rel="noreferrer">
      <SiMedium size="2em" color="white" />
    </a>
    <a href="https://www.instagram.com/wander_acg/" target="_blank" className="ig" rel="noreferrer">
      <GrInstagram size="2em" color="white" />
    </a>
    <a href="https://twitter.com/wanderklk1" target="_blank" style={{ backgroundColor: '#1da1f2' }} rel="noreferrer">
      <GrTwitter size="2em" color="white" />
    </a>
  </div>
);

export default FloatingSocial;
