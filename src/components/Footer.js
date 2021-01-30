import React from "react";
import "./header.css";
import soc from "../images/soc.png";
import { Flex, Text, useColorModeValue, Tooltip, Icon } from "@chakra-ui/react";
import {
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
  FaFacebookSquare,
} from "react-icons/fa";

const MenuItems = ({ children }) => (
  <Text fontSize="xl" mt={{ base: 4, md: 2 }} m={3} display="block">
    {children}
  </Text>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header = () => {
  const bg = useColorModeValue("light", "dark");

  return (
    <Flex
      className="nav-container"
      as="nav"
      bg={bg === "light" ? "white" : "#191919"}
      color={bg === "light" ? "black" : "white"}
      borderBottom={bg === "light" ? "black 1px solid" : "white 1px solid"}
    >
      <MenuItems>
        <a
          href="https://www.linkedin.com/in/carlmichaelmcintosh/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon as={FaLinkedin} boxSize={8} />{" "}
        </a>
      </MenuItems>
      <MenuItems>
        {" "}
        <a
          href="https://twitter.com/cod3rcarl"
          target="_blank"
          rel="noreferrer"
        >
          <Icon as={FaTwitterSquare} boxSize={8} />
        </a>
      </MenuItems>
      <MenuItems>
        {" "}
        <a href="https://github.com/cod3rcarl" target="_blank" rel="noreferrer">
          <Icon as={FaGithubSquare} boxSize={8} />
        </a>
      </MenuItems>
      <MenuItems>
        <a
          href="https://www.facebook.com/cod3rcarl"
          target="_blank"
          rel="noreferrer"
        >
          <Icon as={FaFacebookSquare} boxSize={8} />
        </a>
      </MenuItems>
      <MenuItems>
        <Tooltip
          label="Find out more about the School of Code"
          aria-label="A tooltip"
        >
          <a
            href="https://www.schoolofcode.co.uk/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={soc} alt="School of Code logo" />
          </a>
        </Tooltip>
      </MenuItems>
    </Flex>
  );
};

export default Header;
