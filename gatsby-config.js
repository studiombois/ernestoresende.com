const alias = require('./webpack-alias')

module.exports = {
  // -- METADATA INFORMATION FOR THE SEO COMPONENT --
  siteMetadata: {
    title: 'Ernesto Resende',
    author: '@ernestoresende',
    image: 'https://joshwcomeau.com/images/og-default.png',
    siteUrl: 'https://ernestoresende.com',
    description: 'UI Designer and Front-End Developer. Blogs about design, development and tech stuff.',
    keywords: ['dog', 'cat'],
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
      },
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        remarkPlugins: [require('remark-slug')],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 637,
              linkImagesToOriginal: false,
              showCaptions: true,
              withWebp: true,
            },
          },
          // Remember to remove oEmbed and look for a MDX alternative later.

          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: { sh: 'bash', js: 'javascript' },
              showLineNumbers: false,
            },
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-external-links`,
          `gatsby-remark-unwrap-images`,
        ],
      },
    },

    // Plugins that don't require any additional options. Any future plugins that don't require the
    // resolve parameter should be put bellow.

    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-styled-components',
  ],
}
