import React from 'react';
import { Box, Text, VStack, Image as ChakraImage } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
        author
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
      rawMarkdownBody
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
      rawMarkdownBody: string;
      timeToRead: number;
    };
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const image = getImage(data.markdownRemark.frontmatter.image);

  return (
    <Layout>
      <SEO title={data.markdownRemark.frontmatter.title} description="" />
      <Box
        width={['95%', '75%', '55%']}
        margin="auto"
        textAlign="center"
        py="20"
      >
        <VStack spacing="2" py="10">
          <Text fontWeight="extrabold" fontSize="5xl">
            {data.markdownRemark.frontmatter.title}
          </Text>
          <Text color="grey">{`${data.markdownRemark.frontmatter.date} | ${
            data.markdownRemark.timeToRead
          } min${
            data.markdownRemark.timeToRead === 1 ? '' : 's'
          } to read`}</Text>
          <Text color="grey">{`By ${data.markdownRemark.frontmatter.author}`}</Text>
          <ChakraImage
            as={GatsbyImage}
            image={image!}
            alt={data.markdownRemark.frontmatter.title}
            width="100%"
          />
        </VStack>
        <ReactMarkdown
          components={ChakraUIRenderer()}
          // eslint-disable-next-line
          children={data.markdownRemark.rawMarkdownBody}
          skipHtml
        />
      </Box>
    </Layout>
  );
};

export default BlogPost;
