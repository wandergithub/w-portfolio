import Button from "../shared/Button/Button";
import "./About.scss";
import me from "./assets/me.webp";
import { FaArrowRight } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
      }}
    >
      <div className="about">
        <div className="me">
          <img src={me} />
        </div>
        <div className="about-content">
          <h1 className="title-1 text-uppercase">
            i'm Wander gonzalez.
            <br />
            <span>Web Developer</span>
          </h1>
          <p className="text-p">
            I am a Full-Stack web developer with a passion for computer science.
            I graduated from college with a degree in Mechatronics, where I
            developed an interest in electronics and technology. In my free
            time, I enjoy reading and exercising.
          </p>
          <Button name={"More about me"} iconComponent={<FaArrowRight />} />
        </div>
      </div>
      <ul>
        <li>
          <a href="#">
            <TbBrandGithub title="Github icon" size={"2em"} className="icon" />{" "}
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-twitter icon"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-linkedin-in icon"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-google-plus-g icon"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
