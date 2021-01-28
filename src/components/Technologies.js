import React from "react";
import { Box, Center, VStack, useColorModeValue } from "@chakra-ui/react";
import {
  SiBabel,
  SiBootstrap,
  SiCanva,
  SiConfluence,
  SiCss3,
  SiDcentertainment,
  SiWwe,
  SiDocker,
  SiEa,
  SiFifa,
  SiFirebase,
  SiFigma,
  SiFreecodecamp,
  SiGit,
  SiGithub,
  SiGmail,
  SiGo,
  SiGoodreads,
  SiHeroku,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJira,
  SiMicrosoftexcel,
  SiNetlify,
  SiNodeDotJs,
  SiNpm,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiReactrouter,
  SiSlack,
  SiSocketDotIo,
  SiSpotify,
  SiTrello,
  SiVisualstudiocode,
  SiYoutube,
} from "react-icons/si";
import { MdNotifications } from "react-icons/md";

const Technologies = () => {
  const bg = useColorModeValue("light", "dark");
  return (
    <Center bg={bg === "light" ? "#E8E8E8 " : "#1A1A1A"}>
      <VStack>
        <Box
          id="about-me"
          bg={bg === "light" ? "white" : "#1A1A1A"}
          p={5}
          border={bg === "light" ? "1px solid #1A1A1A" : "1px solid white"}
          borderRadius="2rem"
        >
          <h1 className="title-header">About Me</h1>
          <Center>
            <h3 className="title-subheading">
              'My aim as a Web Developer is to be at least 1% better than I was
              Yesterday!'
            </h3>
          </Center>
        </Box>
      </VStack>
    </Center>
  );
};

export default Technologies;
