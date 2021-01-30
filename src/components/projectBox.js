import {
  Box,
  Text,
  VStack,
  Link,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Player, ControlBar, PlayToggle } from "video-react";
export default function InfoBox({
  text,
  image,
  website,
  technologies,
  github,
  link,
  responsiveness,
  video,
}) {
  const bg = useColorModeValue("light", "dark");
  return (
    <VStack className={"container"}>
      <Box className={"box"}>
        <Link className="title-box" href={website} isExternal>
          {link}
        </Link>

        <div>
          <Player
            //autoPlay
            poster={image}
            src={video}
          >
            <ControlBar autoHide={false} disableDefaultControls={false}>
              <PlayToggle />
            </ControlBar>
          </Player>
        </div>
        <br />
        <Text>{text}</Text>
      </Box>
      <Text style={{ fontSize: "0.5rem" }}>{technologies}</Text>
      <Box>
        {" "}
        <Link href={github} isExternal>
          <Button
            mr={2}
            mt={10}
            colorScheme={bg === "dark" ? "white" : "#191919"}
            variant="outline"
          >
            Github Repository
          </Button>
        </Link>
        <Link href={website} isExternal>
          <Button
            ml={2}
            mt={10}
            colorScheme={bg === "dark" ? "white" : "#191919"}
            variant="outline"
          >
            Website
          </Button>
        </Link>
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          Responsiveness: {responsiveness}
        </p>
      </Box>
    </VStack>
  );
}
