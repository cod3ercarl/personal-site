import {
  Box,
  Heading,
  Center,
  VStack,
  Link,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";

import "./title.css";
export default function Title() {
  const bg = useColorModeValue("light", "dark");
  return (
    <Center>
      <VStack>
        <Box
          className="title"
          boxShadow="dark-lg"
          rounded="md"
          bg={bg === "light" ? "white" : "#1A1A1A"}
          border={bg === "light" ? "1px solid #1A1A1A" : "1px solid white"}
          borderRadius="2rem"
        >
          <h1 className="title-header">Carl McIntosh</h1>
          <hr className={bg === "light" ? "hr-light" : "hr-dark"} />
          <Center>
            <h3 className="title-subheading">Web Developer</h3>
          </Center>
          <Center>
            <Link href="#viewMyWork">
              <Button
                className="title-btn"
                colorScheme={bg === "light" ? "black" : "white"}
                variant="outline"
                size="lg"
              >
                {" "}
                View My Work
              </Button>
            </Link>
          </Center>
        </Box>
      </VStack>
    </Center>
  );
}
