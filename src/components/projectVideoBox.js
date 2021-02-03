import {
  Box,
  Text,
  Center,
  VStack,
  Link,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Player, ControlBar, PlayToggle } from "video-react";
import "../../node_modules/video-react/dist/video-react.css";
export default function InfoBox({
  text,
  image,
  video,
  website,
  technologies,
  github,
  link,
  responsiveness,
}) {
  const bg = useColorModeValue("light", "dark");
  return (
    <Center>
      <VStack>
        <Box>
          <Link className="box-title" href={website} isExternal>
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
        <Text style={{ fontSize: "1rem" }}>{technologies}</Text>
        <Box>
          {" "}
          <Center>
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
          </Center>
          <p style={{ textAlign: "center", marginTop: "1rem" }}>
            Responsiveness: {responsiveness}
          </p>
        </Box>
      </VStack>
    </Center>
  );
}
