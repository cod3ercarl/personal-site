import React from "react";
import ContactItem from "../components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import Title from "../components/Title";
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Title title={"Contact Me"} span={"Contact Me"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19409.07007518956!2d-1.87262095!3d52.549105350000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1614900295967!5m2!1sen!2suk"
            width="600"
            title="location"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem icon={phone} text1={"07711816633"} title={"Phone"} />
          <ContactItem icon={email} text1={"cod3rcarl@gmail.com"} title={"Email"} />
        </div>
      </div>
      <div className="icons">
        <Link to="https://www.linkedin.com/in/carlmichaelmcintosh" className="icon-holder">
          <FontAwesomeIcon icon={faLinkedin} className="icon li" />
        </Link>
        <Link to="https://github.com/cod3rcarl" className="icon-holder">
          <FontAwesomeIcon icon={faGithub} className="icon gh" />
        </Link>
        <Link to="https://twitter.com/cod3rcarl" className="icon-holder">
          <FontAwesomeIcon icon={faTwitter} className="icon tw" />
        </Link>
      </div>
    </div>
  );
}

export default ContactPage;
