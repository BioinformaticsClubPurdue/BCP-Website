const React = require("react");
const { ChakraProvider } = require("@chakra-ui/react");
require("@fontsource/poppins");


exports.wrapRootElement = ({ element, props }) => (
  <ChakraProvider>{element}</ChakraProvider>
);

exports.wrapPageElement = ({ element, props }) => {
    const Layout = element.type.layout ?? React.Fragment;
    return <Layout {...props}>{element}</Layout>
}