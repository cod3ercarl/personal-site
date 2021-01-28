import React from "react";
import "./header.css";
import soc from "../images/soc.png";
import {
  Box,
  Flex,
  Text,
  Button,
  useColorModeValue,
  Tooltip,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import {
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import Modals from "./Modals";
import ThemeToggler from "./themeToggler";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
const MenuItems = ({ children }) => (
  <Text fontSize="xl" mt={{ base: 4, md: 2 }} mr={10} display="block">
    {children}
  </Text>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const bg = useColorModeValue("light", "dark");
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <Icon as={FaLinkedin} boxSize={10} />{" "}
        </a>
      </MenuItems>
      <MenuItems>
        {" "}
        <a
          href="https://twitter.com/cod3rcarl"
          target="_blank"
          rel="noreferrer"
        >
          <Icon as={FaTwitterSquare} boxSize={10} />
        </a>
      </MenuItems>
      <MenuItems>
        {" "}
        <a href="https://github.com/cod3rcarl" target="_blank" rel="noreferrer">
          <Icon as={FaGithubSquare} boxSize={10} />
        </a>
      </MenuItems>
      <MenuItems>
        <a
          href="https://www.facebook.com/cod3rcarl"
          target="_blank"
          rel="noreferrer"
        >
          <Icon as={FaFacebookSquare} boxSize={10} />
        </a>
      </MenuItems>
      <Tooltip
        label="Find out more about the School of Code"
        aria-label="A tooltip"
      >
        <a
          href="https://www.schoolofcode.co.uk/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{ width: "50px", height: "50px" }}
            src={soc}
            alt="School of Code logo"
          />
        </a>
      </Tooltip>
    </Flex>
  );
};

export default Header;
