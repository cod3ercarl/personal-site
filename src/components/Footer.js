import React from "react";
import {
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

const MenuItems = ({ children }) => (
  <Text fontSize="4xl" mt={{ base: 4, md: 0 }} mr={8} ml={8} display="block">
    {children}
  </Text>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Footer = () => {
  const bg = useColorModeValue("light", "dark");

  return (
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
  );
};

export default Footer;
