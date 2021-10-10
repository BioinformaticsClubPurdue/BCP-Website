import { extendTheme } from '@chakra-ui/react';
import 'focus-visible/dist/focus-visible';

export default extendTheme({
  colors: {
    scheme: {
      main: 'rebeccapurple',
      text: 'white',
      dark: '#20232a',
    },
  },
  fonts: {
    heading: 'Helvetica',
    body: 'Helvetica',
  },
});
