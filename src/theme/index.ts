import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

import { styles } from "./styles";
import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";
import { sizes } from "./foundations/sizes";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles,
  fonts,
  colors,
  sizes,
});

export default theme;
