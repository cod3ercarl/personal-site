import React from "react";
import AboutMe from "./AboutMe";
import AboutMeBody from "./AboutMeBody";
import {
  useColorModeValue,
  useDisclosure,
  Box,
  Center,
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  VStack,
  Icon,
} from "@chakra-ui/react";

import {
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
  FaFacebookSquare,
} from "react-icons/fa";

const AboutMeModal = ({ isOpen, onOpen, onClose, text, border }) => {
  const bg = useColorModeValue("light", "dark");
  return (
    <>
      <Center bg={bg === "light" ? "#E8E8E8 " : "#1A1A1A"}>
        <VStack>
          <Box
            key="full"
            className="title aboutMe"
            onClick={onOpen}
            boxShadow="dark-lg"
            rounded="md"
            id="about-me"
            bg={bg === "light" ? "white" : "#1A1A1A"}
            p={5}
            border={bg === "light" ? "1px solid #1A1A1A" : "1px solid white"}
            borderRadius="2rem"
          >
            <h1 className="title-header">About Me</h1>
            <Center>
              <h3 className="title-subheading">
                'My aim as a Web Developer is to be at least 1% better than I
                was Yesterday!'
              </h3>
            </Center>
            <h3 className="title-subheading">Find out more ...</h3>
          </Box>
        </VStack>
      </Center>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent maxWidth="56rem">
          <ModalHeader color={bg === "dark" ? "white" : "#191919"}>
            hello
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody color={bg === "dark" ? "white" : "#191919"}>
            <AboutMeBody />
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AboutMeModal;
