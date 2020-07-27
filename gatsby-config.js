const alias = require('./webpack-alias');

module.exports = {
  // -- METADATA INFORMATION FOR THE SEO COMPONENT --
  siteMetadata: {
    title: 'Ernesto Resende',
    author: 'Ernesto Resende',
    siteUrl: 'https://ernestoresende.com',
    image: '/static/thumbnail_image_later', // !! SET THE GLOBAL THUMBNAIL IMAGE LATER !!
    description: 'UI Designer and Front-End Developer. Blogs about design, development and tech stuff.',
    social: {
      twitter: 'ernestoresende',
      twitterLink: 'https://twitter.com/ErnestoResende',
      linkedinLink: '',
      githubLink: '',
    },
  },

  //  -- GATSBY SPECIFIC PLUGINS --
  plugins: [

    // Plugins that require additional options. Any future plugins that requires aditional options
    // should be put bellow.
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias,
        extensions: [],
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts/`,
      },
    },

    // MDX Plugin and subplugins from remark
    {
      resolve : `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 637,
              linkImagesToOriginal: false,
            },
          },

          // Remember to remove oEmbed and look for a MDX alternative later.

          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases:{sh: "bash", js:"javascript"},
              showLineNumbers: false,
            }
          },

          `gatsby-remark-lazy-load`,
          `gatsby-remark-external-links`,
        ],
      },
    },

    // Plugins that don't require any additional options. Any future plugins that don't require the 
    // resolve parameter should be put bellow.

    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-styled-components',
    
  ],
}
