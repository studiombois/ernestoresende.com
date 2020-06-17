const path = require(`path`);

/* Helper function to create the URL from the file's path in the system. */
const { createFilePath } = require(`gatsby-source-filesystem`);


/* Creates a unique URL for each individual blog post by creating a new field under 
each node on the GraphQL layer. */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  
  /* Ensures that we are only processing Markdown files and not other assets
  that might be within the sourced folder. */ 
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    // Creates new query'able field with name of 'slug'.
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  };
};


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPost = path.resolve(`./src/templates/BlogPost.js`);

  // Queries for markdown nodes to use in creating pages.
  return graphql (
    `
      {
        allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }
                limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                date (formatString: "MMMM DD[,] YYYY")
                description
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Creates the individual pages for the blog posts
    const posts = result.data.allMarkdownRemark.edges;
    posts.forEach((post, index ) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: `/blog${post.node.fields.slug}`,
          component: blogPost,
          context: {
            slug: post.node.fields.slug,
            previous,
            next,
          },
      });
    });

    // Controls the number of posts per listing page.
    const postsPerPage = 2;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog/` : `/blog/page/${i + 1}`,
        component: path.resolve('./src/templates/BlogList.js'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        },
      });
    });
  });
};
