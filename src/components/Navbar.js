import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import ThemeToggler from "./themeToggler";
import { useColorModeValue, useDisclosure, Box } from "@chakra-ui/react";
import Modals from "./Modals";
import "./navbar.css";

const TheNavbar = () => {
  const bg = useColorModeValue("light", "dark");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Navbar
      className={bg === "dark" ? "navBar" : "lightNavBar"}
      collapseOnSelect
      expand="lg"
      sticky="top"
      variant={bg === "light" ? "light " : "dark"}
    >
      <ThemeToggler />
      <Navbar.Brand href="#home">Carl McIntosh</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about-me">About Me</Nav.Link>
          <Nav.Link href="#viewMyWork">Projects</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>
            <Modals
              text="Contact Me"
              bg="transparent"
              border="1px"
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TheNavbar;
