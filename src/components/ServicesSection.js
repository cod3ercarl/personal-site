import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiHeroku, SiNetlify, SiPostgresql, SiMongodb, SiSocketDotIo, SiJest, SiAuth0, SiPostman, SiFirebase } from "react-icons/si";
function ServicesSection({ image, title, color }) {
  return (
    <div className="ServicesSection">
      <div className="service">
        <div className="service-content">
          {color === "heroku" && <SiHeroku className={`icon ${color}`} />}
          {color === "netlify" && <SiNetlify className={`icon ${color}`} />}
          {color === "postgres" && <SiPostgresql className={`icon ${color}`} />}
          {color === "mongo" && <SiMongodb className={`icon ${color}`} />}
          {color === "socket" && <SiSocketDotIo className={`icon ${color}`} />}
          {color === "jest" && <SiJest className={`icon ${color}`} />}
          {color === "auth" && <SiAuth0 className={`icon ${color}`} />}
          {color === "postman" && <SiPostman className={`icon ${color}`} />}
          {color === "firebase" && <SiFirebase className={`icon ${color}`} />}

          <FontAwesomeIcon className={`icon ${color}`} icon={image} />

          <h5 className="s-title">{title}</h5>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
