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
  const dateString = `${timeSince(Date.parse(frontmatter.date))} ago`;

  return (
    <Grid templateRows="4, 1">
      <ChakraImage
        as={GatsbyImage}
        image={image!}
        alt={frontmatter.title}
        height="250px"
        roundedTop="md"
      />
      <VStack
        bg="white"
        padding="4"
        roundedBottom="md"
        align="normal"
        boxShadow="md"
        spacing="1"
        height="100%"
      >
        <Text fontWeight="extrabold" fontSize="2xl">
          {frontmatter.title}
        </Text>
        <Text>{`${frontmatter.author} (${dateString})`}</Text>
        <Text paddingTop="5" color="gray.600">
          {excerpt}
        </Text>
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
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
        ]}
        gap="10"
        width="100%"
      >
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
      </Grid>
    </VStack>
  );
};

export default BlogList;
