import path from "path";
import { queryForProps as queryForEventProps } from "./src/queries/EventPageQuery";
import { queryForProps as queryForHomeProps } from "./src/queries/IndexPageQuery";
import { queryForProps as queryForAttendProps } from "./src/queries/AttendPageQuery";
import { queryForProps as queryForAboutProps } from "./src/queries/AboutPageQuery";
import { queryForProps as queryForWatchProps } from "./src/queries/WatchPageQuery";
import { queryForProps as queryForSpeakersProps } from "./src/queries/SpeakersPageQuery";
import { queryForProps as queryForVolunteerProps } from "./src/queries/VolunteerPageQuery";
import { queryForProps as queryForTalkProps } from "./src/queries/TallkPageQuery";
import { queryForProps as queryForPartnersProps } from "./src/queries/PartnersPageQuery";

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
const talksQuery = `#graphql
  query Events {
    allTalksYaml(filter: {collectionId: {eq: "talk"}}) {
      nodes {
        slug
      }
    }
  }
`;

const propsQueries = {
  IndexPage: queryForHomeProps,
  AttendPage: queryForAttendProps,
  AboutPage: queryForAboutProps,
  WatchPage: queryForWatchProps,
  SpeakersPage: queryForSpeakersProps,
  VolunteerPage: queryForVolunteerProps,
  PartnersPage: queryForPartnersProps,
};

export const createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const pagesResult = await graphql(pageQuery);
  if (pagesResult.errors) {
    pagesResult.errors.forEach((e) => console.error(e.toString()));
    throw pagesResult.errors;
  }

  const pages = pagesResult.data.allPagesYaml.edges;
  await Promise.all(
    pages.map(async ({ node }) => {
      const queryForProps = propsQueries[String(node.templateKey)];
      const props =
        queryForProps != null ? await queryForProps(graphql) : undefined;

      createPage({
        path: node.slug,
        component: path.resolve(
          `src/templates/${String(node.templateKey)}.tsx`
        ),
        context: {
          id: node.id,
          props,
        },
      });
    })
  );

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

  const talksResult = await graphql(talksQuery);
  if (talksResult.errors) {
    talksResult.errors.forEach((e) => console.error(e.toString()));
    throw talksResult.errors;
  }

  const talks = talksResult.data.allTalksYaml.nodes;
  await Promise.all(
    talks.map(async (node) => {
      const slug = node.slug;
      const props = await queryForTalkProps(graphql, node.slug);
      createPage({
        path: `talk/${slug}`,
        component: path.resolve(`src/templates/TalkPage.tsx`),
        context: {
          props,
        },
      });
    })
  );
};

export const createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `#graphql
    type EventsYaml implements Node {
      slug: String
    }

    type SuggestedEventYaml implements Node {
      slug: String
    }
  `;
  createTypes(typeDefs);
};
