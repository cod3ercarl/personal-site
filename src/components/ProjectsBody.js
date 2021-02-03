import React from "react";
import { final, work } from "./Data";
import ProjectBox from "./projectBox";
import ProjectVideoBox from "./projectVideoBox";

import "./Home.css";
import { useColorModeValue, Icon } from "@chakra-ui/react";

const ProjectsBody = () => {
  const bg = useColorModeValue("light", "dark");
  return (
    <div className="container">
      <div className="players">
        {final.map((item) => {
          return (
            <article
              key={item.title}
              style={
                bg === "light"
                  ? { border: "1px solid black" }
                  : { border: "1px solid white" }
              }
            >
              <ProjectVideoBox
                key={item.title}
                link={item.link}
                text={item.text}
                image={item.image}
                video={item.video}
                website={item.website}
                technologies={item.technologies.map((icon, index) => (
                  <Icon
                    key={index}
                    as={icon}
                    boxSize={8}
                    mr={3}
                    ml={3}
                    mt={5}
                  />
                ))}
                github={item.github}
                responsiveness={item.responsiveness}
              />
            </article>
          );
        })}

        {work.map((item) => {
          return (
            <section
              key={item.title}
              style={
                bg === "light"
                  ? { border: "1px solid black" }
                  : { border: "1px solid white" }
              }
            >
              <ProjectBox
                key={item.title}
                link={item.link}
                text={item.text}
                image={item.image}
                website={item.website}
                video={item.video}
                technologies={item.technologies.map((icon, index) => (
                  <Icon
                    key={index}
                    as={icon}
                    boxSize={5}
                    mr={3}
                    ml={3}
                    mt={5}
                  />
                ))}
                github={item.github}
                responsiveness={item.responsiveness}
              />
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsBody;
