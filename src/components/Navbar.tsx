import React from 'react';
import {
  Flex,
  HStack,
  Link as ChakraLink,
  Text,
  Spacer,
  Button,
  useBreakpointValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import { FaSlack } from 'react-icons/fa';
import Icon from './Icon';

interface NavLinkProps {
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ text }) => (
  <ChakraLink as={GatsbyLink} to={`/${text}`} pl={['2', '4', '8']}>
    <Text fontWeight="medium">
      {text.charAt(0).toUpperCase() + text.slice(1)}
    </Text>
  </ChakraLink>
);

interface NavbarProps {
  links: string[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const buttonText = useBreakpointValue({
    base: 'Join',
    md: 'Join our Slack!',
  });
  const mediaQueries = useMediaQuery('(min-width: 600px');

  return (
    <Flex
      as="nav"
      px={['1', '3', '5']}
      w="100%"
      bg="scheme.darker"
      color="white"
      alignItems="center"
      m={0}
      position="sticky"
      top="0"
      zIndex="200"
    >
      <ChakraLink as={GatsbyLink} to="/">
        <HStack>
          <Flex maxW="50px" height="100%" alignItems="center">
            {mediaQueries[0] && <Icon />}
          </Flex>
          <Text fontWeight="extrabold" paddingLeft={[0, 1, 1]} align="center">
            BDSBC Purdue
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
          {buttonText}
        </Button>
      </ChakraLink>
    </Flex>
  );
};

export default Navbar;
