const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions;

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
      const id = node.id;
      const slug = node.slug;
      const htmlPath = slug == "/" ? slug : slug.replace(/\/$/, "") + ".html";
      createPage({
        path: htmlPath,
        component: path.resolve(
          `src/templates/${String(node.templateKey)}.tsx`
        ),
        context: {
          id,
        },
      });
      if (slug != "/") {
        createRedirect({
          fromPath: slug,
          toPath: htmlPath,
          isPermanent: true,
        });
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `PagesYaml`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
