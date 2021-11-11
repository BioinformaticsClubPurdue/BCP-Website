const React = require("react");
const { ChakraProvider } = require("@chakra-ui/react");
require("@fontsource/poppins");

exports.wrapRootElement = ({ element, props }) => (
  <ChakraProvider>{element}</ChakraProvider>
);