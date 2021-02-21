import path from "path";
import { queryForProps as queryForEventProps } from "./src/queries/EventPageQuery";

const pageQuery = `#graphql
  query Page {
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
`;

const eventQuery = `#graphql
  query Events {
    allEventsYaml(filter: {collectionId: {eq: "event"}}) {
      nodes {
        slug
      }
    }
  }
`;

export const createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const pagesResult = await graphql(pageQuery);
  if (pagesResult.errors) {
    pagesResult.errors.forEach((e) => console.error(e.toString()));
    throw pagesResult.errors;
  }

  const pages = pagesResult.data.allPagesYaml.edges;
  pages.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`src/templates/${String(node.templateKey)}.tsx`),
      context: {
        id: node.id,
      },
    });
  });

  const eventsResult = await graphql(eventQuery);
  if (eventsResult.errors) {
    eventsResult.errors.forEach((e) => console.error(e.toString()));
    throw eventsResult.errors;
  }

  const events = eventsResult.data.allEventsYaml.nodes;
  await Promise.all(
    events.map(async (node) => {
      const slug = node.slug;
      const props = await queryForEventProps(graphql, node.slug);
      createPage({
        path: `event/${slug}`,
        component: path.resolve(`src/templates/EventPage.tsx`),
        context: {
          props,
        },
      });
    })
  );
};
