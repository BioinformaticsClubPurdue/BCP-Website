const React = require("react");
const { ChakraProvider } = require("@chakra-ui/react");
const Layout = require("./src/components/Layout");
require("@fontsource/poppins");

/*
exports.wrapPageElement = ({ element, props }) => (
  <Layout>{element}</Layout>
);*/

exports.wrapRootElement = ({ element, props }) => (
  <ChakraProvider>{element}</ChakraProvider>
);