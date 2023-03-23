import "./FloatingSocial.scss";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiMedium } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";

const FloatingSocial = () => {
  return (
    <div className="icons-container">
      <a style={{ backgroundColor: "#0e76a8" }}>
        <FaLinkedinIn size={"2em"} color={"white"} />
      </a>
      <a style={{ backgroundColor: "#4e545a" }}>
        <BsGithub size={"2em"} color={"white"} />
      </a>
      <a style={{ backgroundColor: "black" }}>
        <SiMedium size={"2em"} color={"white"} />
      </a>
      <a className="ig">
        <GrInstagram size={"2em"} color={"white"} />
      </a>
    </div>
  );
};

export default FloatingSocial;
