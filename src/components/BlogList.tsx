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
import { timeSince } from '../utils';

interface BlogItemProps {
  frontmatter: {
    title: string;
    author: string;
    date: string;
    image: any;
  };
  id: string;
  excerpt: string;
  fields: {
    slug: string;
  };
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

interface BlogQueryType {
  blog: {
    posts: BlogItemProps[];
  };
}

const blogQuery = graphql`
  query BlogQuery {
    blog: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
        fields {
          slug
        }
        id
        excerpt
      }
    }
  }
`;

interface BlogListProps {}

const BlogList: React.FC<BlogListProps> = () => {
  const { blog } = useStaticQuery<BlogQueryType>(blogQuery);

  return (
    <VStack m={3} height="100%" my="10">
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
          <ChakraLink as={GatsbyLink} to={`/${post.fields.slug}`} key={post.id}>
            <BlogItem
              frontmatter={post.frontmatter}
              excerpt={post.excerpt}
              id={post.id}
              fields={post.fields}
            />
          </ChakraLink>
        ))}
      </Grid>
    </VStack>
  );
};

export default BlogList;
