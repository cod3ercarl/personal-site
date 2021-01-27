import {
  Box,
  Text,
  Center,
  VStack,
  Image,
  Link,
  AspectRatio,
} from "@chakra-ui/react";
import { Player, ControlBar, PlayToggle } from "video-react";
import "../../node_modules/video-react/dist/video-react.css";
export default function InfoBox({
  title,
  text,
  image,
  video,
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
          <br />
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
      </VStack>
    </Center>
  );
}
