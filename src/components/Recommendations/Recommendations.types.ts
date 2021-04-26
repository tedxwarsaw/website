import { FluidObject } from "gatsby-image";

interface RecommendedItem {
  displayName: string;
  slug: string;
  cover: FluidObject;
  coverDesktop: FluidObject;
  date?: string;
  speaker?: string;
  eventSlug?: string;
  eventName?: string;
  duration?: string;
}

export interface RecommendationsProps {
  recommendations: {
    item: RecommendedItem;
    order: number;
  }[];
  title?: string,
}
