import { Flex } from '@chakra-ui/react';
import React from 'react';
import Logo from './Logo';
import MenuLinks from './MenuLinks';
import MenuToggle from './MenuToggle';

interface NavBarContainerProps {
  children: React.ReactNode;
}

const NavBarContainer: React.FC<NavBarContainerProps> = ({ children }) => (
  <Flex
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    w="100%"
    mb={8}
    p={8}
    bg={['scheme.main', 'scheme.main', 'transparent', 'transparent']}
    color={['white', 'white', 'scheme.main', 'scheme.main']}
  >
    {children}
  </Flex>
);

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer>
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default Navbar;
