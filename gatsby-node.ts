const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allPagesYaml {
        edges {
          node {
            id
            slug
            templateKey
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const pages = result.data.allPagesYaml.edges;

    pages.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(
          `src/templates/${String(node.templateKey)}.tsx`
        ),
        context: {
          id: node.id,
        },
      });
    });
  });
};
