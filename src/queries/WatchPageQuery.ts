import { queryForAllTalks, queryForNewsletter } from "./globalQueries";
import { Props } from "../templates/WatchPage";
import { getFluidImage } from "./utils";

export const pageQuery = `#graphql
  query WatchPageTemplate {
    pagesYaml(templateKey: { eq: "WatchPage" }) {
      headerTitle
      headerSubtitle
      recommendedTalks {
        talkSlug
      }
    }
  }
`;

const talkQuery = `#graphql
query TalkQuery(
  $talkSlug: String
) {
  talk: talksYaml(slug: {eq: $talkSlug}) {
    slug
    displayName
    speaker
    cover {
        image {
          desktop
          mobile
        }
    }
    duration
  }
}
`;

export const queryForProps = async (
  graphql: (query: string, args?: any) => any
): Promise<Props> => {
  const {
    data: { pagesYaml },
  } = await graphql(pageQuery);

  const recommendedTalks = await Promise.all(
    pagesYaml.recommendedTalks.map(async (talkData) => {
      const {
        data: { talk },
      } = await graphql(talkQuery, {
        talkSlug: talkData.talkSlug,
      });

      const coverMobile = await getFluidImage({
        graphql,
        path: talk.cover.image.mobile,
        quality: 90,
        sizes: "(max:-width: 768px)",
      });
      const coverDesktop = await getFluidImage({
        graphql,
        path: talk.cover.image.desktop,
        quality: 90,
        sizes: "(max:-width: 2000px)",
      });

      const cover = {
        image: {
          desktop: coverDesktop,
          mobile: coverMobile,
        },
      };

      return { ...talk, cover };
    })
  );

  const { talks, eventNames } = await queryForAllTalks(graphql);
  const newsletter = await queryForNewsletter(graphql);

  return {
    ...pagesYaml,
    ...newsletter,
    talks,
    eventNames,
    recommendedTalks,
  };
};
