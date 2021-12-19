import React from 'react';
import Layout from '../components/Layout';
import EventList from '../components/EventList';
import SEO from '../components/SEO';

interface ScheduleProps {}

const Schedule: React.FC<ScheduleProps> = () => (
  <Layout>
    <SEO title="Schedule" />
    <EventList />
  </Layout>
);

Schedule.layout = Layout;

export default Schedule;
