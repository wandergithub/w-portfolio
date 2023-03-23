import "./FloatingSocial.scss";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiMedium } from "react-icons/si";
import { GrInstagram, GrTwitter} from "react-icons/gr";

const FloatingSocial = () => {
  return (
    <div className="icons-container">
      <a href="https://www.linkedin.com/in/wander-gonzalez/" target="_blank" style={{ backgroundColor: "#0e76a8" }}>
        <FaLinkedinIn size={"2em"} color={"white"} />
      </a>
      <a href="https://github.com/wandergithub" target="_blank" style={{ backgroundColor: "#4e545a" }}>
        <BsGithub size={"2em"} color={"white"} />
      </a>
      <a href="https://medium.com/@wandergonzalez0" target="_blank" style={{ backgroundColor: "black" }}>
        <SiMedium size={"2em"} color={"white"} />
      </a>
      <a href="https://www.instagram.com/wander_acg/" target="_blank" className="ig">
        <GrInstagram size={"2em"} color={"white"} />
      </a>
      <a href="https://twitter.com/wanderklk1" target="_blank" style={{ backgroundColor: "#1da1f2" }}>
        <GrTwitter size={"2em"} color={"white"} />
      </a>
    </div>
  );
};

export default FloatingSocial;
