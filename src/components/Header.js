import React from "react";
import "./header.css";
import {
  Box,
  Flex,
  Text,
  Button,
  useColorModeValue,
  Link,
  useDisclosure,
} from "@chakra-ui/react";

import Modals from "./Modals";
import ThemeToggler from "./themeToggler";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
const MenuItems = ({ children }) => (
  <Text fontSize="xl" mt={{ base: 4, md: 2 }} mr={5} ml={5} display="block">
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
      <Flex align="center" mr={5}>
        <ThemeToggler />
        <h1 className="nav-header" mr={10} ml={10} mb={1}>
          Carl McIntosh
        </h1>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box
        className="box"
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "auto", md: "auto" }}
        mr={5}
      >
        <Link href="#about-me">
          <MenuItems>About Me</MenuItems>{" "}
        </Link>
        <Link href="#viewMyWork">
          <MenuItems>View My Work</MenuItems>
        </Link>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Modals
          text="Contact Me"
          bg="transparent"
          border="1px"
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      </Box>
    </Flex>
  );
};

export default Header;
