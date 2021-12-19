import React from 'react';
import { Text, VStack, Box } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';

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

interface BlogItemProps {
  title: string;
  author: string;
  date: string;
}

const BlogItem: React.FC<BlogItemProps> = ({ title, author, date }) => (
  <Box>{title + author}</Box>
);

interface BlogListProps {}

const BlogList: React.FC<BlogListProps> = () => {
  const { blog } = useStaticQuery(blogQuery);

  console.log(blog);

  return (
    <VStack>
      <Text fontSize="3xl">Blog Posts</Text>
      {blog.posts.map((post) => (
        <BlogItem
          title={post.frontmatter.title}
          key={post.frontmatter.id}
          author={post.frontmatter.author}
          date={post.frontmatter.date}
        />
      ))}
    </VStack>
  );
};

export default BlogList;
