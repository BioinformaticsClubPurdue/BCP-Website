import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import favicon from '../images/icon.svg';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
      }
    }
  }
`;

interface SEOProps {
  title: string;
}

const SEO: React.FC<SEOProps> = ({ title }) => {
  const { site } = useStaticQuery(query);

  const { defaultTitle } = site.siteMetadata;

  const fullTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <Helmet title={fullTitle}>
      <html lang="en" />
      <meta name="description" content={site.description} />
      <link rel="icon" href={favicon} />
    </Helmet>
  );
};

export default SEO;
