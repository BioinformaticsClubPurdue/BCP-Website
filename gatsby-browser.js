const React = require('react');
const { ChakraProvider } = require('@chakra-ui/react');
require('@fontsource/poppins');
require('prismjs/themes/prism-okaidia.css');

exports.wrapRootElement = ({ element, props }) => (
  <ChakraProvider>{element}</ChakraProvider>
);
