import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// Style system
import { styles } from './styles'
import { breakpoints } from './foundations/breakpoints'
import { fonts } from './foundations/fonts'
import { colors } from './foundations/colors'
import { sizes, typographySizes, borderRadius } from './foundations/sizes'
import { spacing } from './foundations/spacing'
import { textStyles } from './foundations/textStyles'

// Components
import { container } from './components/theme.container'
import { button } from './components/theme.button'

// Global config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// Extend the theme
const theme = extendTheme({
  config,
  styles,
  breakpoints,
  fonts,
  colors,
  sizes,
  ...typographySizes,
  ...spacing,
  ...borderRadius,
  textStyles,
  components: {
    Container: container,
    Button: button,
  },
})

export default theme
