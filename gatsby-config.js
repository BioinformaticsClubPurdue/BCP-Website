module.exports = {
  plugins: [
    '@chakra-ui/gatsby-plugin',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: `${__dirname}/content/markdown`,
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
        name: 'json',
        path: `${__dirname}/content/json`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'notebook',
        path: `${__dirname}/content/notebook`,
        ignore: [`${__dirname}/content/notebook/.ipynb_checkpoints`],
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: '@rafaelquintanilha/gatsby-transformer-ipynb',
      options: {
        displayOrder: ['image/png', 'text/html', 'text/plain'],
        showPrompt: false,
      },
    },
  ],
  siteMetadata: {
    title: 'BDSBC Purdue',
    description: 'Biomedical Data Science and Bioinformatics Club at Purdue',
  },
};
