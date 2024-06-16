// Global styles for the website/app
import { mode, Styles } from '@chakra-ui/theme-tools'

export const styles: Styles = {
  global: (props) => ({
    body: {
      color: mode('gray.900', 'white')(props),
      bg: mode('white', 'gray.800')(props),
      transitionProperty: 'background-color',
      transitionDuration: 'normal',
    },
  }),
}
