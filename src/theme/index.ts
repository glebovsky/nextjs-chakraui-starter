import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// Style system
import { styles } from "./styles";
import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";
import { sizes } from "./foundations/sizes";

// Components
import { container } from "./components/theme.container";

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
  components: {
    Container: container,
  },
});

export default theme;
