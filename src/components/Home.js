import React from "react";

import Title from "./Title";
import Projects from "./Projects";
import Footer from "./Footer";
import AboutMeModal from "./AboutMeModal";
import ProjectsBody from "./ProjectsBody";

import "./Home.css";

import {
  useColorModeValue,
  useDisclosure,
  Box,
  Center,
} from "@chakra-ui/react";
import "./Home.css";

// Here's the signature

const Home = () => {
  const bg = useColorModeValue("light", "dark");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    // OPENING HEADING

    <div>
      <Box>
        <Center
          className={bg === "light" ? " myLightBg intro" : " myBg dark intro"}
        >
          <Title />
        </Center>
      </Box>

      <Box bg={bg === "light" ? "#E8E8E8 " : "#1A1A1A"}>
        <AboutMeModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <Projects />
        <ProjectsBody />
        <Footer />
      </Box>
    </div>
  );
};

export default Home;
