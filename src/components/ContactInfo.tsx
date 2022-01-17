import React from 'react';
import { Text, Box, Link as ChakraLink } from '@chakra-ui/react';

interface ContactInfoProps {}

const ContactInfo: React.FC<ContactInfoProps> = () => (
  <Box margin="5">
    <Text fontSize="x-large" textAlign="center">
      The recommended way to contact us by joining{' '}
      <ChakraLink
        href="https://join.slack.com/t/purduebioinformatics/signup"
        isExternal
      >
        our Slack.
      </ChakraLink>{' '}
      Also, feel free to send us email with any questions.
    </Text>
  </Box>
);

export default ContactInfo;
