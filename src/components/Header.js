import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import ThemeToggler from "./themeToggler";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
const MenuItems = ({ children }) => (
  <Text fontSize="xl" mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const bg = useColorModeValue("light", "dark");

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={bg === "light" ? "white" : "#191919"}
      color={bg === "light" ? "black" : "white"}
      p={6}
      pos="sticky"
      top="0"
      zIndex={2}
      borderBottom={bg === "light" ? "black 1px solid" : "white 1px solid"}
    >
      <Flex align="center" mr={5}>
        <ThemeToggler />
        <Heading as="h1" size="xl" mr={10} ml={10} mb={1}>
          Carl McIntosh
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mr={10}
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
        <Link href="#contactMe">
          <Button bg="transparent" border="1px">
            Contact Me
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
