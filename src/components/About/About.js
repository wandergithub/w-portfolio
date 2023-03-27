import Button from "../shared/Button/Button";
import "./About.scss";
import me from "./assets/me.webp";
import { FaArrowRight } from "react-icons/fa";
import FloatingSocial from "../FloatingSocial/FloatingSocial";
import { GrDocumentUser } from "react-icons/gr";

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
          <a href="https://docs.google.com/document/d/1WpT8wFZMX6YKyg4YN3l6hYIXNqSo1xpdtLb_zSInrt8/edit?usp=sharing" target={"_blank"} >
            <Button
              name={"Resume"}
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

export default About;
