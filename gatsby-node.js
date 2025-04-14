const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === `Mdx`) {
//     const slug = createFilePath({
//       node,
//       getNode,
//       basePath: `content/posts`,
//     });

//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     });
//   }
// };

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  result.data.allMdx.nodes.forEach((node) => {
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: node.internal.contentFilePath,
      context: {
        id: node.id,
      },
    });
  });
};
