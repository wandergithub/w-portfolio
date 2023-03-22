import "./About.scss";
import me from "./assets/me.webp";
const About = () => {
  return (
    <div className="about">
      <div className="me">
        <img src={me} />
      </div>
      <div>
        <h1 className="title-1 text-uppercase">
          i'm Wander gonzalez.
          <br />
          <span>Web Developer</span>
        </h1>
        <p className="text-p">
          I am a Full-Stack web developer with a passion for computer science. I
          graduated from college with a degree in Mechatronics, where I
          developed an interest in electronics and technology. In my free time,
          I enjoy reading and exercising.
        </p>
        <button> More About Me</button>
      </div>
    </div>
  );
};

export default About;
