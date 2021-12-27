import React from 'react';
import { graphql } from 'gatsby';
import { Box } from '@chakra-ui/react';
import SEO from '../components/SEO';
import Layout from '../components/Layout';

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    jupyterNotebook(fields: { slug: { eq: $slug } }) {
      metadata {
        frontmatter {
          title
          author
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      }
      html
    }
  }
`;

interface NotebookPostProps {
  data: {
    jupyterNotebook: {
      metadata: {
        frontmatter: {
          title: string;
          author: string;
          image: any;
        };
      };
      html: string;
    };
  };
}

const NotebookPost: React.FC<NotebookPostProps> = ({ data }) => {
  const { frontmatter } = data.jupyterNotebook.metadata;
  const { html } = data.jupyterNotebook;
  return (
    <Layout>
      <SEO title={frontmatter.title} />

      <Box
        width={['95%', '75%', '55%']}
        textAlign="center"
        py="20"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
};

export default NotebookPost;
