import React from "react";
import { me, experience, final, work } from "./Data";
import InfoBox from "./infoBox";
import ProjectBox from "./projectBox";
import ProjectVideoBox from "./projectVideoBox";

import {
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import {
  useColorModeValue,
  Box,
  Center,
  Heading,
  Button,
  VStack,
  Link,
  Flex,
  Text,
} from "@chakra-ui/react";
import "./Home.css";

// Here's the signature

const Home = () => {
  const bg = useColorModeValue("light", "dark");
  const MenuItems = ({ children }) => (
    <Text fontSize="4xl" mt={{ base: 4, md: 0 }} mr={8} ml={8} display="block">
      {children}
    </Text>
  );
  return (
    // OPENING HEADING

    <div>
      <Box>
        <Center
          className={
            bg === "light" ? "view myLightBg intro" : "view myBg dark intro"
          }
        >
          <Box
            bg={bg === "light" ? "white" : "#1A1A1A"}
            p={20}
            border={bg === "light" ? "1px solid #1A1A1A" : "1px solid white"}
            borderRadius="2rem"
          >
            <Heading as="h1" size="4xl" mb={4} ml={10} mr={10}>
              Carl McIntosh
            </Heading>
            <hr className={bg === "light" ? "hr-light" : "hr-dark"} />
            <Center>
              <Heading as="h3" fontSize="1.6rem" mt={4}>
                Web Developer
              </Heading>
            </Center>
            <Center>
              <Link href="#viewMyWork">
                <Button
                  mt={10}
                  colorScheme={bg === "light" ? "black" : "white"}
                  variant="outline"
                  size="lg"
                >
                  {" "}
                  View My Work
                </Button>
              </Link>
            </Center>
          </Box>
        </Center>
      </Box>
      {/* ABOUT ME */}
      <Box bg={bg === "light" ? "#E8E8E8 " : "#1A1A1A"}>
        <VStack id="about-me" align="center" justifyContent="center" p={10}>
          {" "}
          <Heading as="h1" size="2xl" mb={5}>
            About Me
          </Heading>
          <Heading as="h2" w="40rem" fontSize="2rem" align="center">
            'My aim as a Web Developer is to be at least 1% better than I was
            Yesterday!'
          </Heading>
        </VStack>
        <div className="container">
          <div className="players">
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
                <section
                  key={item.title}
                  style={
                    bg === "light"
                      ? { border: "1px solid black" }
                      : { border: "1px solid white" }
                  }
                >
                  <InfoBox title={item.title} text={item.text} />
                </section>
              );
            })}
            s
          </div>
        </div>

        {/* PROJECTS */}
        <VStack id="viewMyWork" align="center" justifyContent="center" p={10}>
          {" "}
          <Heading as="h1" size="2xl" mb={5}>
            Projects
          </Heading>
          <Heading as="h2" w="40rem" fontSize="2rem" align="center">
            A Sample of my Work!
          </Heading>
        </VStack>
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
                    link={item.link}
                    text={item.text}
                    image={item.image}
                    video={item.video}
                    website={item.website}
                    technologies={item.technologies}
                    github={item.github}
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
                    link={item.link}
                    text={item.text}
                    image={item.image}
                    website={item.website}
                    technologies={item.technologies}
                    github={item.github}
                  />
                </section>
              );
            })}
          </div>
        </div>
      </Box>
      <Flex
        id="contactMe"
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg={bg === "light" ? "white" : "#191919"}
        color={bg === "light" ? "black" : "white"}
        p={10}
        bottom="0"
        zIndex={2}
        borderTop={bg === "light" ? "black 1px solid" : "white 1px solid"}
      >
        <Box
          display="flex"
          width={{ sm: "full", md: "auto" }}
          justifyContent="center"
          flexGrow={1}
          mr={10}
        >
          <MenuItems>
            <a
              href="https://www.linkedin.com/in/carlmichaelmcintosh/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </MenuItems>
          <MenuItems>
            {" "}
            <a
              href="https://twitter.com/cod3rcarl"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitterSquare />
            </a>
          </MenuItems>
          <MenuItems>
            {" "}
            <a
              href="https://github.com/cod3rcarl"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare />
            </a>
          </MenuItems>
          <MenuItems>
            <a
              href="https://www.facebook.com/cod3rcarl"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare />
            </a>
          </MenuItems>
        </Box>
      </Flex>
    </div>
  );
};

export default Home;
