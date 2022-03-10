import { extendTheme, ThemeOverride } from '@chakra-ui/react'

import components from './components'
import global from './global'
import colors from './tokens/colors'
import fonts from './tokens/fonts'

const theme: ThemeOverride = extendTheme({
  styles: {
    global
  },
  fonts,
  colors,
  components,
  config: {
    cssVarPrefix: 'mac'
  }
})

export default theme
