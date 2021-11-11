import React from 'react';
import { Center, HStack, Text, Link } from '@chakra-ui/react';
import { FaSlack } from 'react-icons/fa';

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => (
  <Center>
    <Link
      href="https://join.slack.com/t/purduebioinformatics/signup"
      isExternal
    >
      <HStack>
        <Text fontSize="3xl" fontWeight="semibold">
          Join our Slack!
        </Text>
        <FaSlack size="30" />
      </HStack>
    </Link>
  </Center>
);

export default Contact;
