import React from 'react';
import {
  Flex,
  HStack,
  Link as ChakraLink,
  Text,
  Box,
  Spacer,
  Button,
} from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import { FaSlack } from 'react-icons/fa';
import Icon from './Icon';

interface NavLinkProps {
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ text }) => (
  <ChakraLink as={GatsbyLink} to={`/${text}`} pl="8">
    <Text fontWeight="medium">
      {text.charAt(0).toUpperCase() + text.slice(1)}
    </Text>
  </ChakraLink>
);

interface NavbarProps {
  links: string[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => (
  <Flex
    as="header"
    px="5"
    w="100%"
    bg="scheme.darker"
    color="white"
    alignItems="center"
  >
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
    <Spacer />
    <ChakraLink
      href="https://join.slack.com/t/purduebioinformatics/signup"
      isExternal
    >
      <Button
        bg="scheme.main"
        leftIcon={<FaSlack />}
        _hover={{ bg: 'scheme.main_light' }}
      >
        Join our Slack!
      </Button>
    </ChakraLink>
  </Flex>
);

export default Navbar;
