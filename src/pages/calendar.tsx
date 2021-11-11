import React from 'react';
import Layout from '../components/Layout';
import EventList from '../components/EventList';

interface CalendarProps {}

const Calendar: React.FC<CalendarProps> = () => (
  <Layout>
    <EventList />
  </Layout>
);

export default Calendar;
