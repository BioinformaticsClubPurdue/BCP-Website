import React from 'react';
import { Box } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

interface BlogPostProps {
  data: {
    title: string;
    content: string;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => (
  <Layout>
    <SEO />
    <Box>
      <ReactMarkdown children={data} />
    </Box>
  </Layout>
);

export default BlogPost;
