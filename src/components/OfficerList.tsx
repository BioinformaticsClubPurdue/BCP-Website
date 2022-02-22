import React from 'react';
import {
  Grid,
  Image as ChakraImage,
  ListIcon,
  ListItem,
  List,
  VStack,
  Heading,
  Box,
  Text,
  HStack,
} from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FaClipboardCheck, FaInbox, FaThumbsUp, FaBook } from 'react-icons/fa';

interface OfficerCardProps {
  name: string;
  year: string;
  major: string;
  email: string;
  position: string;
  goals: string;
  interests: string;
  currentWork: string;
  imageSrc: any;
}

const OfficerCard: React.FC<OfficerCardProps> = ({
  name,
  year,
  major,
  email,
  position,
  goals,
  interests,
  currentWork,
  imageSrc,
}) => {
  const image = getImage(imageSrc);
  return (
    <VStack spacing="0">
      <ChakraImage
        as={GatsbyImage}
        image={image!}
        alt={`Picture of ${name}`}
        height="350px"
        width="100%"
        roundedTop="md"
      />
      <VStack bg="white" boxShadow="lg" padding="5" roundedBottom="md">
        <List fontSize="large" width="100%" spacing="2">
          <ListItem>
            <Heading>{`${name} - ${position}`}</Heading>
          </ListItem>
          <ListItem>
            <Text color="gray.600">{`${year} | ${major}`}</Text>
          </ListItem>
          <ListItem>
            <HStack>
              <ListIcon as={FaBook} />
              <Text>{currentWork}</Text>
            </HStack>
          </ListItem>
          <ListItem>
            <HStack>
              <ListIcon as={FaClipboardCheck} />
              <Text>{goals}</Text>
            </HStack>
          </ListItem>
          <ListItem>
            <HStack>
              <ListIcon as={FaThumbsUp} />
              <Text>{interests}</Text>
            </HStack>
          </ListItem>
          <ListItem>
            <HStack>
              <ListIcon as={FaInbox} />
              <Text>{email}</Text>
            </HStack>
          </ListItem>
        </List>
      </VStack>
    </VStack>
  );
};

interface OfficerQueryType {
  data: {
    officers: OfficerCardProps[];
  };
}

const officerQuery = graphql`
  query OfficerQuery {
    data: allOfficersJson {
      officers: nodes {
        name
        year
        major
        email
        position
        goals
        interests
        currentWork: current_work
        imageSrc: image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

interface OfficerListProps {}

const OfficerList: React.FC<OfficerListProps> = () => {
  const { officers } = useStaticQuery<OfficerQueryType>(officerQuery).data;
  return (
    <Box m={['1', '3', '5', '7', '9']} height="100%">
      <Heading textAlign="center">Meet the Officers</Heading>
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap="10"
        margin="5"
      >
        {officers.map((officer: OfficerCardProps) => (
          <OfficerCard
            key={officer.name}
            name={officer.name}
            year={officer.year}
            major={officer.major}
            email={officer.email}
            position={officer.position}
            goals={officer.goals}
            interests={officer.interests}
            imageSrc={officer.imageSrc}
            currentWork={officer.currentWork}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default OfficerList;
