import Button from "../shared/Button/Button";
import { RiMailSendLine } from "react-icons/ri";
import { FaMap, FaLinkedinIn } from "react-icons/fa";
import { GoMailRead } from "react-icons/go";
import { SlCallIn } from "react-icons/sl";
import { BsGithub } from "react-icons/bs";
import { SiMedium } from "react-icons/si";
import { GrInstagram, GrTwitter } from "react-icons/gr";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import "./Contact.scss";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pwjxwun', 'contact_form', form.current, 'YHPP3TWppQs7wuTmZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0px 20px",
      }}
    >
      <div
        className="title-section text-left text-sm-center aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h1>
          Get in
          <span> Touch</span>
        </h1>
        <span className="title-bg span-contact">Contact</span>
      </div>

      <div className="contact-info">
        <div className="text-p">
          <h2 className="text-uppercase title-2">Dont be shy!</h2>
          <p>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div>
            <FaMap size={"2em"} color="#ffb400" className="contact-icon" />
            <div>
              <h4 className="text-uppercase no-m title-3">address point</h4>
              <p className="no-m">
                123 Stree New York City , United States Of America 750065.
              </p>
            </div>
          </div>
          <div>
            <GoMailRead size={"2em"} color="#ffb400" className="contact-icon" />
            <div>
              <h4 className="text-uppercase no-m title-3">mail me</h4>
              <p className="no-m">wandergonzalez0@hotmail.com</p>
            </div>
          </div>
          <div>
            <SlCallIn size={"2em"} color="#ffb400" className="contact-icon" />
            <div>
              <h4 className="text-uppercase no-m title-3">call me</h4>
              <p className="no-m">+1 849 631 6566</p>
            </div>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/wander-gonzalez/"
              target="_blank"
              className="contact-icons"
            >
              <FaLinkedinIn size={"1.3em"} color={"white"} />
            </a>
            <a
              href="https://github.com/wandergithub"
              target="_blank"
              className="contact-icons"
            >
              <BsGithub size={"1.3em"} color={"white"} />
            </a>
            <a
              href="https://medium.com/@wandergonzalez0"
              target="_blank"
              className="contact-icons"
            >
              <SiMedium size={"1.3em"} color={"white"} />
            </a>
            <a
              href="https://www.instagram.com/wander_acg/"
              target="_blank"
              className="contact-icons"
            >
              <GrInstagram size={"1.3em"} color={"white"} />
            </a>
            <a
              href="https://twitter.com/wanderklk1"
              target="_blank"
              className="contact-icons"
            >
              <GrTwitter size={"1.3em"} color={"white"} />
            </a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <input type={"text"} name="name" id="name" placeholder={"NAME"} className="input" />
            <input type={"email"} name="email" id="email" placeholder={"EMAIL"} className="input" />
          </div>
          <input type={"text"} name="subject" id="subject" placeholder={"SUBJECT"} className="input" />
          <textarea type={"text"} name="message" id="message" placeholder={"MESSAGE"} className="input" />
          <Button
            type={"submit"}
            name={"SEND MESSAGE"}
            iconComponent={<RiMailSendLine size={"1.5em"} />}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
