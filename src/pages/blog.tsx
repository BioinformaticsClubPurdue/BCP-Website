import React from 'react';
import { Text } from '@chakra-ui/react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

interface BlogProps {}

const Blog: React.FC<BlogProps> = () => (
  <Layout>
    <SEO title="Blog" />
    <Text>Blog is in progress</Text>
  </Layout>
);

export default Blog;
