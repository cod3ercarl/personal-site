import { Box, Text, Center, VStack, Heading } from "@chakra-ui/react";

export default function InfoBox({ title, text }) {
  return (
    <Center>
      <VStack className={"container"}>
        <Box className={"box"}>
          <Heading textAlign="center">{title}</Heading>
          <br />
          <Text>{text}</Text>
        </Box>
      </VStack>
    </Center>
  );
}
