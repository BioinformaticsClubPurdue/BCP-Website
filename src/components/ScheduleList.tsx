import React from 'react';
import { Box, Text, HStack, Grid, VStack } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { graphql, useStaticQuery } from 'gatsby';

interface ScheduleItemProps {
  name: string;
  location: string;
  date: string;
  description: string;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({
  name,
  location,
  date,
  description,
}) => (
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

export const scheduleQuery = graphql`
  query ScheduleQuery {
    schedule: allSpring22Json {
      events: nodes {
        date
        description
        name
        location
      }
    }
  }
`;

interface ScheduleQueryType {
  schedule: {
    events: ScheduleItemProps[];
  };
}

interface EventListProps {}

const EventList: React.FC<EventListProps> = () => {
  const { schedule } = useStaticQuery<ScheduleQueryType>(scheduleQuery);

  return (
    <VStack m="3">
      <Text fontWeight="bold">Current date: {new Date().toDateString()}</Text>
      <Grid
        templateColumns={['repeat(1, 1fr)', null, 'repeat(2, 1fr)']}
        gap="10"
        width="100%"
      >
        {schedule.events.map((event: ScheduleItemProps) => (
          <ScheduleItem
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
};

export default EventList;
