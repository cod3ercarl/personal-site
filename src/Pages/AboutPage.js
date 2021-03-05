import React from "react";
import Title from "../Components/Title";

import { faReact, faJsSquare, faHtml5, faNodeJs, faCss3Alt, faGithub } from "@fortawesome/free-brands-svg-icons";

import ImageSection from "../Components/ImageSection";
import ServicesSection from "../Components/ServicesSection";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection aboutMe />
      <ImageSection soc />
      <ImageSection away />
      <Title title={"Accomplished Skills"} span={"My Skills"} />
      <div className="services-container">
        <div className="servives-container">
          <ServicesSection color="react" image={faReact} title={"React"} />
          <ServicesSection color="js" image={faJsSquare} title={"JavaScript"} />
          <ServicesSection color="html" image={faHtml5} title={"HTML"} />
          <ServicesSection color="css" image={faCss3Alt} title={"CSS"} />
          <ServicesSection color="node" image={faNodeJs} title={"Node JS"} />
        </div>
        <div className="servives-container">
          <ServicesSection color="heroku" image={null} title={"Heroku"} />
          <ServicesSection color="netlify" image={null} title={"Netlify"} />
          <ServicesSection color="postgres" image={null} title={"PostgresSQL"} />
          <ServicesSection color="mongo" image={null} title={"Mongo DB"} />
          <ServicesSection color="github" image={faGithub} title={"Github"} />
        </div>
        <div className="servives-container">
          <ServicesSection color="socket" image={null} title={"Socket IO"} />
          <ServicesSection color="jest" image={null} title={"Jest"} />
          <ServicesSection color="auth" image={null} title={"Auth0"} />
          <ServicesSection color="postman" image={null} title={"Postman"} />
          <ServicesSection color="firebase" image={null} title={"Firebase"} />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
