module.exports = {
  plugins: [
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        isResettingCSS: false,
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'schedule',
        path: `${__dirname}/content/schedule`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'officers',
        path: `${__dirname}/content/officers`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 200,
            },
          },
          `gatsby-remark-prismjs`,
          'gatsby-remark-katex',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-json',
  ],
  siteMetadata: {
    title: 'BDSBC Purdue',
    description: 'Biomedical Data Science and Bioinformatics Club at Purdue',
  },
};
