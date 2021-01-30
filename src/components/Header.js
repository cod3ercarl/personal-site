import React from "react";
import "./header.css";
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Link,
  useDisclosure,
  Center,
  HStack,
} from "@chakra-ui/react";

import Modals from "./Modals";
import ThemeToggler from "./themeToggler";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
const MenuItems = ({ children }) => (
  <Text className="nav-menu">{children}</Text>
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
      borderBottom={bg === "light" ? "black 2px solid" : "white 2px solid"}
    >
      <Center>
        <ThemeToggler />
        <Link to="/">
          {" "}
          <div>
            <HStack className="logo">
              <p className="logoText">Carl McIntosh</p>
            </HStack>
          </div>{" "}
        </Link>
      </Center>

      <Box className="icon" onClick={handleToggle}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box className="box">
        <Flex className="navigation">
          <Link href="#about-me">
            <MenuItems>About Me</MenuItems>{" "}
          </Link>
          <Link href="#viewMyWork">
            <MenuItems>View My Work</MenuItems>
          </Link>

          <Modals
            text="Contact Me"
            bg="transparent"
            border="1px"
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
