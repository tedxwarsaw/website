import { getFluidImage } from "../utils";
import { NewsletterProps } from "@/components/shared/Newsletter";

const newsletterQuery = `#graphql
query NewsletterQuery {
  newsletter:  globalYaml(collectionId: { eq: "newsletter" })  {
    newsletterTitle
    newsletterMessage1
    newsletterMessage2
    newsletterBackgroundImagePath
    newsletterBackgroundImageDesktopPath
  }
}
`;

export const queryForNewsletter = async (
  graphql: (query: string, args?: any) => any
): Promise<NewsletterProps> => {
  const {
    data: { newsletter },
  } = await graphql(newsletterQuery);

  console.log(newsletter);
  const newsletterBackgroundImage = await getFluidImage({
    graphql,
    path: newsletter.newsletterBackgroundImagePath,
    quality: 90,
    sizes: "(max:-width: 768px)",
  });

  const newsletterBackgroundImageDesktop = await getFluidImage({
    graphql,
    path: newsletter.newsletterBackgroundImageDesktopPath,
    quality: 90,
    sizes: "(max:-width: 2000px)",
  });

  return {
    ...newsletter,
    newsletterBackgroundImage,
    newsletterBackgroundImageDesktop,
  };
};
