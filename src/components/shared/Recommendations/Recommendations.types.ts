import { FluidObject } from "gatsby-image";

export interface RecommendedItem {
  displayName: string;
  slug: string;
  cover: FluidObject;
  coverDesktop: FluidObject;
  date?: string;
  speaker?: string;
  eventSlug?: string;
  eventName?: string;
  eventCategory?: string;
  duration?: string;
}

export interface RecommendationsProps {
  recommendations: {
    item: RecommendedItem;
    order: number;
  }[];
  recommendationsTitle?: string;
  className?: string;
}
