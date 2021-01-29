import React from "react";
import {
  useColorModeValue,
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
  Icon,
} from "@chakra-ui/react";

import {
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
  FaFacebookSquare,
} from "react-icons/fa";

const Modals = ({ isOpen, onOpen, onClose, text, border }) => {
  const bg = useColorModeValue("light", "dark");
  return (
    <>
      <Button
        bg={bg}
        border={border}
        onClick={onOpen}
        size="md"
        height="48px"
        width="200px"
        borderColor="green.500"
      >
        {text}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={bg === "dark" ? "white" : "#191919"}>
            {text}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody color={bg === "dark" ? "white" : "#191919"}>
            <Center>
              <HStack spacing="2rem" textAlign="center">
                {" "}
                <a
                  href="https://www.facebook.com/cod3rcarl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon as={FaFacebookSquare} boxSize={10} />
                </a>
                <a
                  href="https://github.com/cod3rcarl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon as={FaGithubSquare} boxSize={10} />
                </a>
                <a
                  href="https://www.linkedin.com/in/carlmichaelmcintosh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon as={FaLinkedin} boxSize={10} />{" "}
                </a>
                <a
                  href="https://twitter.com/cod3rcarl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon as={FaTwitterSquare} boxSize={10} />
                </a>
              </HStack>
            </Center>
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

export default Modals;
