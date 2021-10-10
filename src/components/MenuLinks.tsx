import { Box, Button, Stack } from '@chakra-ui/react';
import React from 'react';

interface MenuItemProps {
  title: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title }) => (
  <Button variant="link" color="white">
    {title}
  </Button>
);

interface MenuLinksProps {
  isOpen: boolean;
}

const MenuLinks: React.FC<MenuLinksProps> = ({ isOpen }) => (
  <Box
    display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
    flexBasis={{ base: '100%', md: 'auto' }}
  >
    <Stack
      spacing={8}
      align="center"
      justify={['center', 'space-between', 'flex-end', 'flex-end']}
      direction={['column', 'row', 'row', 'row']}
      pt={[4, 4, 0, 0]}
    >
      <MenuItem title="Home" />
      <MenuItem title="Schedule" />
    </Stack>
  </Box>
);

export default MenuLinks;
