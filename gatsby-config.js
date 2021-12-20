module.exports = {
  plugins: [
    '@chakra-ui/gatsby-plugin',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: 'content/blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'content/images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'schedule',
        path: 'content/schedule',
      },
    },
    'gatsby-transformer-remark',
  ],
  siteMetadata: {
    title: 'BDSBC Purdue',
    description: 'Biomedical Data Science and Bioinformatics Club at Purdue',
  },
};
