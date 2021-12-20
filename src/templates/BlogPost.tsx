import React from 'react';
import { Box } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export const blogMarkdownQuery = graphql`
  query BlogMarkdownQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      rawMarkdownBody
    }
  }
`;

interface BlogPostProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
        author: string;
      };
      rawMarkdownBody: string;
    };
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => (
  <Layout>
    <SEO title={data.markdownRemark.frontmatter.title} description="" />
    <Box p={10}>
      <ReactMarkdown
        components={ChakraUIRenderer()}
        // eslint-disable-next-line
        children={data.markdownRemark.rawMarkdownBody}
        skipHtml
      />
    </Box>
  </Layout>
);

export default BlogPost;
