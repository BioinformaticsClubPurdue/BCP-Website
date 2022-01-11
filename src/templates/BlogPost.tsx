import React from 'react';
import { Box, Text, VStack, Image as ChakraImage } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
        <Box
          maxWidth="100%"
          fontSize="lg"
          dangerouslySetInnerHTML={{ __html: html }}
          overflowX="auto"
          sx={{
            p: {
              paddingTop: '3',
              paddingBottom: '3',
            },
            h1: {
              fontSize: '2.5em',
              fontWeight: 'bold',
              marginTop: '0.67em',
              marginBottom: '0.67em',
            },
            h2: {
              fontSize: '2em',
              fontWeight: 'bold',
              marginTop: '0.83em',
              marginBottom: '0.83em',
            },
            h3: {
              fontSize: '1.83em',
              fontWeight: 'bold',
              marginTop: '1em',
              marginBottom: '1em',
            },
            h4: {
              fontSize: '1.5em',
              fontWeight: 'bold',
              marginTop: '1.33em',
              marginBottom: '1.33em',
            },
            h5: {
              fontSize: '1.33em',
              fontWeight: 'bold',
              marginTop: '1.67em',
              marginBottom: '1.67em',
            },
            h6: {
              fontSize: '1.17em',
              fontWeight: 'bold',
              marginTop: '2.33em',
              marginBottom: '2.33em',
            },
          }}
        />
      </Box>
    </Layout>
  );
};

export default BlogPost;
