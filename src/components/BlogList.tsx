import React from 'react';
import { Text, VStack, Box, Link as ChakraLink } from '@chakra-ui/react';
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby';

export const blogQuery = graphql`
  query BlogQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        frontmatter {
          author
          date
          title
        }
        id
      }
    }
  }
`;

interface FrontMatter {
  title: string;
  author: string;
  date: string;
}

interface BlogPost {
  frontmatter: FrontMatter;
  id: string;
}

const BlogItem: React.FC<FrontMatter> = ({ title, author, date }) => (
  <Box>{`${title} - ${author} (${date})`}</Box>
);

interface BlogListProps {}

const BlogList: React.FC<BlogListProps> = () => {
  const { blog } = useStaticQuery(blogQuery);

  return (
    <VStack>
      <Text fontSize="3xl">Blog Posts</Text>
      {blog.posts.map((post: BlogPost) => (
        <ChakraLink as={GatsbyLink} to={`/${post.frontmatter.title}`}>
          <BlogItem
            title={post.frontmatter.title}
            key={post.id}
            author={post.frontmatter.author}
            date={post.frontmatter.date}
          />
        </ChakraLink>
      ))}
    </VStack>
  );
};

export default BlogList;
