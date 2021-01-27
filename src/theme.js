import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts = {
  body: "Fira Sans, sans-serif",
  heading: "Fira Sans, sans-serif",
};

const theme = extendTheme({ config, fonts });

export default theme;
