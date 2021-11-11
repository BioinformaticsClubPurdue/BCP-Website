import React from 'react';
import Layout from '../components/Layout';
import EventList from '../components/EventList';

interface ScheduleProps {}

const Schedule: React.FC<ScheduleProps> = () => <EventList />;

Schedule.layout = Layout;

export default Schedule;
