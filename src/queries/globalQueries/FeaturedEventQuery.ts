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
      hook
      description
      location {
        displayName
        city
      }
      coverHero {
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
    path: event.coverHero.image.mobile,
    quality: 90,
    sizes: "(max:-width: 768px)",
  });
  const coverImageDesktop = await getFluidImage({
    graphql,
    path: event.coverHero.image.desktop,
    quality: 90,
    sizes: "(max:-width: 2000px)",
  });

  const coverHero = {
    button: {
      text: event.coverHero.button.text,
      show: event.coverHero.button.show,
      link: event.coverHero.button.link,
    },
    image: {
      desktop: coverImage,
      mobile: coverImageDesktop,
    },
  };

  return {
    ...event,
    coverHero,
  };
};
