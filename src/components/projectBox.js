import { Box, Text, Center, VStack, Image, Link } from "@chakra-ui/react";

export default function InfoBox({
  title,
  text,
  image,
  website,
  technologies,
  github,
  link,
}) {
  return (
    <Center>
      <VStack className={"container"}>
        <Box className={"box"}>
          <Link href={website} isExternal>
            {link}
          </Link>
          <Text style={{ fontSize: "1rem" }}>{technologies}</Text>

          <br />
          <Image src={image} alt={link} />
          <br />
          <Text>{text}</Text>
        </Box>
      </VStack>
    </Center>
  );
}
