import Button from "../shared/Button/Button";
import { RiMailSendLine } from "react-icons/ri";

const Contact = () => {
  return (
    <div>
      <div
        className="title-section text-left text-sm-center aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h1>
          Get in
          <span> Touch</span>
        </h1>
        <span className="title-bg">Contact</span>
      </div>
      <div>
        <form>
          <input type={"text"} placeholder={"NAME"} />
          <input type={"text"} placeholder={"EMAIL"} />
          <input type={"text"} placeholder={"SUBJECT"} />
          <textarea type={"text"} placeholder={"MESSAJE"} />
          <Button name={"See More"} iconComponent={<RiMailSendLine size={"1.5em"}/>} />
        </form>
      </div>
      <div style={{ alignSelf: "center", margin: "20px 0px" }}>
        
      </div>
    </div>
  );
};

export default Contact;
