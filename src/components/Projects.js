import { Box, Center, VStack, useColorModeValue } from "@chakra-ui/react";

import "./title.css";
export default function Projects() {
  const bg = useColorModeValue("light", "dark");
  return (
    <Center bg={bg === "light" ? "#E8E8E8 " : "#1A1A1A"}>
      <VStack>
        <Box
          id="viewMyWork"
          boxShadow="dark-lg"
          rounded="md"
          bg={bg === "light" ? "white" : "#1A1A1A"}
          p={5}
          border={bg === "light" ? "1px solid #1A1A1A" : "1px solid white"}
          borderRadius="2rem"
        >
          <h1 className="title-header">Projects</h1>
          <Center>
            <h3 className="title-subheading">A Sample of my work</h3>
          </Center>
        </Box>
      </VStack>
    </Center>
  );
}
