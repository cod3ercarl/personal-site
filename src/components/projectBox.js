import {
  Box,
  Text,
  Center,
  VStack,
  Image,
  Link,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export default function InfoBox({
  text,
  image,
  website,
  technologies,
  github,
  link,
}) {
  const bg = useColorModeValue("light", "dark");
  return (
    <VStack className={"container"}>
      <Box className={"box"}>
        <Link href={website} isExternal>
          {link}
        </Link>
        <Text style={{ fontSize: "1rem" }}>{technologies}</Text>
        <Box>
          {" "}
          <Link href={github} isExternal>
            <Button
              mr={5}
              mt={10}
              colorScheme={bg === "dark" ? "white" : "#191919"}
              variant="outline"
            >
              Github Repository
            </Button>
          </Link>
          <Link href={website} isExternal>
            <Button
              mr={5}
              mt={10}
              colorScheme={bg === "dark" ? "white" : "#191919"}
              variant="outline"
            >
              Website
            </Button>
          </Link>
        </Box>
        <br />
        <Image src={image} alt={link} />
        <br />
        <Text>{text}</Text>
      </Box>
    </VStack>
  );
}
