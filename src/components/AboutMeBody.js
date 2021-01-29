import React from "react";
import { me, experience } from "./Data";
import InfoBox from "./infoBox";
import "./Home.css";
import { useColorModeValue, Box } from "@chakra-ui/react";

const AboutMeBody = () => {
  const bg = useColorModeValue("light", "dark");
  return (
    <Box className="players">
      {experience.map((item) => {
        return (
          <article
            key={item.title}
            style={
              bg === "light"
                ? { border: "1px solid black" }
                : { border: "1px solid white" }
            }
          >
            <InfoBox title={item.title} text={item.text} />
          </article>
        );
      })}
      {me.map((item) => {
        return (
          <article
            key={item.title}
            style={
              bg === "light"
                ? { border: "1px solid black" }
                : { border: "1px solid white" }
            }
          >
            <InfoBox title={item.title} text={item.text} />
          </article>
        );
      })}
    </Box>
  );
};

export default AboutMeBody;
