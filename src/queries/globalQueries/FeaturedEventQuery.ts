import { getFluidImage } from "../utils";
import { NewsletterProps } from "@/components/shared/Newsletter";

const featuredEventQuery = `#graphql
query FeaturedEventQuery {
  featuredEventMeta:  featuredEventYaml(collectionId: { eq: "featuredEvent" })  {
    slug
  }
}
`;

const eventQuery = `#graphql
  query EventQuery(
    $eventSlug: String
  ) {
    event: eventsYaml(slug: {eq: $eventSlug}) {
      slug
      description
      cover {
        button {
          text
          show
          link
        }
        image {
          desktop
          mobile
        }
      }
      date
      time
    }
  }
`;

export const queryForFeatureEvent = async (
  graphql: (query: string, args?: any) => any
): Promise<NewsletterProps> => {
  const {
    data: { featuredEventMeta },
  } = await graphql(featuredEventQuery);

  const {
    data: { event },
  } = await graphql(eventQuery, {
    eventSlug: featuredEventMeta.slug,
  });

  const coverImage = await getFluidImage({
    graphql,
    path: event.cover.image.mobile,
    quality: 90,
    sizes: "(max:-width: 768px)",
  });
  const coverImageDesktop = await getFluidImage({
    graphql,
    path: event.cover.image.desktop,
    quality: 90,
    sizes: "(max:-width: 2000px)",
  });

  const cover = {
    button: {
      text: event.cover.button.text,
      show: event.cover.button.show,
      link: event.cover.button.link,
    },
    image: {
      desktop: coverImage,
      mobile: coverImageDesktop,
    },
  };

  return {
    ...event,
    cover,
  };
};
