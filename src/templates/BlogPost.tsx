import React from 'react';
import { Box, Text, VStack, Image as ChakraImage } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import 'katex/dist/katex.min.css';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export const blogMarkdownQuery = graphql`
  query BlogMarkdownQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        author
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
      html
      timeToRead
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
        image: any;
      };
      html: string;
      timeToRead: number;
    };
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const { frontmatter, timeToRead, html } = data.markdownRemark;
  const image = getImage(frontmatter.image);

  const dateTimeParts = frontmatter.date.slice(0, -1).split('T');
  const dateString = dateTimeParts[0];

  const timeToReadString = `${timeToRead} min${
    timeToRead === 1 ? '' : 's'
  } to read`;

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Box width={['95%', '75%', '55%']} margin="auto" py="20">
        <VStack spacing="2" py="10">
          <Text fontWeight="extrabold" fontSize="5xl" textAlign="center">
            {frontmatter.title}
          </Text>
          <Text color="grey">{`${frontmatter.author} | ${dateString} | ${timeToReadString}`}</Text>
          <ChakraImage
            as={GatsbyImage}
            image={image!}
            alt={frontmatter.title}
            width="100%"
          />
        </VStack>
        <Box fontSize="lg" dangerouslySetInnerHTML={{ __html: html }} />
      </Box>
    </Layout>
  );
};

export default BlogPost;
