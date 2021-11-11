import React from 'react';
import { HStack, Link as ChakraLink, Text, Box } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import Icon from './Icon';

interface NavLinkProps {
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ text }) => (
  <ChakraLink as={GatsbyLink} to={`/${text}`}>
    <Text fontWeight="medium">
      {text.charAt(0).toUpperCase() + text.slice(1)}
    </Text>
  </ChakraLink>
);

interface NavbarProps {
  links: string[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => (
  <HStack pl="5" w="100%" bg="scheme.darker" spacing="7" color="white">
    <ChakraLink as={GatsbyLink} to="/">
      <HStack>
        <Box maxW="50px">
          <Icon />
        </Box>
        <Text fontWeight="extrabold" paddingLeft={1} align="center">
          BDSBC @ Purdue
        </Text>
      </HStack>
    </ChakraLink>
    {links.map((link: string) => (
      <NavLink text={link} key={link} />
    ))}
  </HStack>
);

export default Navbar;
