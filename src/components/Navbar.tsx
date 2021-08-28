import React from 'react';
import { HStack, Link as ChakraLink } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';

interface NavbarProps {
  items: [string, string][];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => (
  <HStack bg="scheme.main" color="white" fontWeight="extrabold">
    {items.map((item) => (
      <ChakraLink as={GatsbyLink} to={item[1]} m="2" key={item[1]}>
        {item[0]}
      </ChakraLink>
    ))}
  </HStack>
);

export default Navbar;
