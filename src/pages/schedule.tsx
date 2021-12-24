import React from 'react';
import Layout from '../components/Layout';
import ScheduleList from '../components/ScheduleList';
import SEO from '../components/SEO';

interface ScheduleProps {}

const Schedule: React.FC<ScheduleProps> = () => (
  <Layout>
    <SEO title="Schedule" />
    <ScheduleList />
  </Layout>
);

export default Schedule;
