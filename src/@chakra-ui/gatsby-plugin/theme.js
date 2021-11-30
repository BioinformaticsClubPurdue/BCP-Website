import { extendTheme } from '@chakra-ui/react';
import 'focus-visible/dist/focus-visible';

export default extendTheme({
  colors: {
    scheme: {
      main: 'rebeccapurple',
      main_light: '#855CAD',
      darker: '#20232a',
      dark: '#282c34',
      background: "#f5f5f5"
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
});
