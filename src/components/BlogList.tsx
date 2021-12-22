import React from 'react';
import {
  Text,
  VStack,
  Link as ChakraLink,
  Grid,
  Image as ChakraImage,
} from '@chakra-ui/react';
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ResponsiveGrid from './ResponsiveGrid';
import { timeSince } from '../utils/timeSince';

export const blogQuery = graphql`
  query BlogQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        frontmatter {
          author
          date
          title
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
        id
        excerpt
      }
    }
  }
`;

interface BlogItemProps {
  frontmatter: {
    title: string;
    author: string;
    date: string;
    image: any;
  };
  id: string;
  excerpt: string;
}

const BlogItem: React.FC<BlogItemProps> = ({ frontmatter, excerpt }) => {
  const image = getImage(frontmatter.image);

  return (
    <Grid templateColumns="repeat(2, 1fr)">
      <ChakraImage
        as={GatsbyImage}
        image={image!}
        alt={frontmatter.title}
        h="300px"
        w="auto"
      />
      <VStack
        bg="white"
        color="black"
        padding="4"
        rounded="md"
        align="normal"
        boxShadow="md"
        spacing="1"
      >
        <Text fontWeight="extrabold" fontSize="2xl">
          {`${frontmatter.title} (${timeSince(
            Date.parse(frontmatter.date)
          )} ago)`}
        </Text>
        <Text>{frontmatter.author}</Text>
        <Text paddingTop="5">{excerpt}</Text>
      </VStack>
    </Grid>
  );
};

interface BlogListProps {}

const BlogList: React.FC<BlogListProps> = () => {
  const { blog } = useStaticQuery(blogQuery);

  return (
    <VStack m={3}>
      <Text fontSize="3xl">Blog Posts</Text>
      <ResponsiveGrid>
        {blog.posts.map((post: BlogItemProps) => (
          <ChakraLink
            as={GatsbyLink}
            to={`/${post.frontmatter.title}`}
            key={post.id}
          >
            <BlogItem
              frontmatter={post.frontmatter}
              excerpt={post.excerpt}
              id={post.id}
            />
          </ChakraLink>
        ))}
      </ResponsiveGrid>
    </VStack>
  );
};

export default BlogList;
