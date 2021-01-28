import {
  Box,
  Heading,
  Center,
  VStack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import "./title.css";
export default function AboutMe() {
  const bg = useColorModeValue("light", "dark");
  return (
    <Center bg={bg === "light" ? "#E8E8E8 " : "#1A1A1A"}>
      <VStack>
        <Box
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
              'My aim as a Web Developer is to be at least 1% better than I was
              Yesterday!'
            </h3>
          </Center>
        </Box>
      </VStack>
    </Center>
  );
}
