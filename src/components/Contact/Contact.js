import Button from "../shared/Button/Button";
import { RiMailSendLine } from "react-icons/ri";
import { FaMap } from "react-icons/fa";
import { GoMailRead } from "react-icons/go";
import { SlCallIn } from "react-icons/sl";

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
        <h2>Dont be shy!</h2>
        <p>
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be part of your visions.
        </p>
        <div>
            <FaMap size={"2em"} />
            <div>
                <h4>
                    address point
                </h4>
                <p>123 Stree New York City , United States Of America 750065.</p>
            </div>
        </div>
        <div>
            <GoMailRead size={"2em"} />
            <div>
                <h4>
                    mail me
                </h4>
                <p>wandergonzalez0@hotmail.com</p>
            </div>
        </div>
        <div>
            <SlCallIn size={"2em"} />
            <div>
                <h4>
                    call me
                </h4>
                <p>+1 849 631 6566</p>
            </div>
        </div>
      </div>
      <div>
        <form>
          <input type={"text"} placeholder={"NAME"} />
          <input type={"text"} placeholder={"EMAIL"} />
          <input type={"text"} placeholder={"SUBJECT"} />
          <textarea type={"text"} placeholder={"MESSAJE"} />
          <Button
            name={"See More"}
            iconComponent={<RiMailSendLine size={"1.5em"} />}
          />
        </form>
      </div>
      <div style={{ alignSelf: "center", margin: "20px 0px" }}></div>
    </div>
  );
};

export default Contact;
