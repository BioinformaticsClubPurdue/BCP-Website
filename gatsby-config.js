module.exports = {
  plugins: [
    '@chakra-ui/gatsby-plugin',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
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
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'schedule',
        path: `${__dirname}/content/schedule`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
  ],
  siteMetadata: {
    title: 'BDSBC Purdue',
    description: 'Biomedical Data Science and Bioinformatics Club at Purdue',
  },
};
