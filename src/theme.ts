import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// We are annotaing the config with theme Config

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({ config });

export default theme;
