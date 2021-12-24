import React from 'react';
import {
  Text,
  VStack,
  Box,
  Link as ChakraLink,
  HStack,
  StackDivider,
  Icon,
  useMediaQuery,
  Stack,
} from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import {
  FaTable,
  FaCode,
  FaChalkboardTeacher,
  FaSpotify,
  FaNewspaper,
} from 'react-icons/fa';
import { IconType } from 'react-icons';

interface IconDividersItemProps {
  text: string;
  icon: IconType;
  link?: string;
}

const IconDividersItem: React.FC<IconDividersItemProps> = ({
  text,
  icon,
  link,
}) => {
  if (link) {
    return (
      <ChakraLink as={GatsbyLink} to={link}>
        <HStack>
          <Icon as={icon} />
          <Text>{text}</Text>
        </HStack>
      </ChakraLink>
    );
  }
  return (
    <HStack>
      <Icon as={icon} />
      <Text>{text}</Text>
    </HStack>
  );
};

interface IconDividersProps {
  items: IconDividersItemProps[];
}

const IconDividers: React.FC<IconDividersProps> = ({ items }) => {
  const [useHStack] = useMediaQuery('(min-width: 700px)');

  return (
    <Stack
      direction={useHStack ? 'row' : 'column'}
      divider={<StackDivider />}
      width="100%"
    >
      {items.map((item: IconDividersItemProps) => (
        <IconDividersItem
          text={item.text}
          icon={item.icon}
          link={item.link}
          key={item.text}
        />
      ))}
    </Stack>
  );
};

interface DetailsProps {}

const Details: React.FC<DetailsProps> = () => (
  <VStack
    py="10"
    spacing="20"
    fontSize="2xl"
    width={['95%', '75%', '55%']}
    margin="auto"
  >
    <Box>
      <Text>
        In BDSBC at Purdue, we are interested in the intersection between Data
        Science and Biology. Our goal is to develop academically and
        professionally through:
      </Text>
      <IconDividers
        items={[
          {
            text: 'Working Through Datacamp Courses',
            icon: FaTable,
          },
          {
            text: 'Talks From Professionals In the Field',
            icon: FaChalkboardTeacher,
          },
          {
            text: 'Programming Exercises and Contests',
            icon: FaCode,
          },
        ]}
      />
    </Box>
    <Box>
      <Text>
        Interested?{' '}
        <ChakraLink
          href="https://join.slack.com/t/purduebioinformatics/signup"
          isExternal
        >
          Join our Slack!
        </ChakraLink>{' '}
        You may also enjoy the following content that we create:
      </Text>
      <IconDividers
        items={[
          {
            text: 'Spotify Podcasts with Professionals in the Field',
            icon: FaSpotify,
            link: '/contact',
          },
          {
            text: 'Online Tutorials About Bioinformatics',
            icon: FaNewspaper,
            link: '/blog',
          },
        ]}
      />
    </Box>
  </VStack>
);

export default Details;
