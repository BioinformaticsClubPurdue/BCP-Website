import React from 'react';
import { Box, Text, HStack, Grid, VStack } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import eventsData from '../assets/sp22.json';

interface EventProps {
  name: string;
  location: string;
  date: string;
  description: string;
}

const Event: React.FC<EventProps> = ({ name, location, date, description }) => (
  <VStack
    bg="white"
    color="black"
    padding="4"
    rounded="md"
    align="normal"
    boxShadow="md"
  >
    <HStack>
      <FaCalendarAlt />
      <Text fontWeight="bold" fontSize="large">
        {name}
      </Text>
    </HStack>
    <Box
      bg="gray.100"
      borderRadius="10px"
      color="gray.500"
      display="inline-block"
      width="fit-content"
    >
      <Text fontWeight="bold" p="1">
        {date}
      </Text>
    </Box>
    <Text>{description}</Text>
    <HStack>
      <FaMapMarkerAlt />
      <Text>{location}</Text>
    </HStack>
  </VStack>
);

interface EventListProps {}

const EventList: React.FC<EventListProps> = () => (
  <VStack m="3">
    <Text fontWeight="bold">Current date: {new Date().toDateString()}</Text>
    <Grid
      templateColumns={['repeat(1, 1fr)', null, 'repeat(2, 1fr)']}
      gap="10"
      width="100%"
    >
      {eventsData.map((event: EventProps) => (
        <Event
          key={event.date}
          name={event.name}
          location={event.location}
          date={event.date}
          description={event.description}
        />
      ))}
    </Grid>
  </VStack>
);

export default EventList;
