import { Talk } from "@/components/Watch/WatchList/WatchList.types";
import { FluidObject } from "gatsby-image";

export interface RecommendedTalk {
  slug: string;
  displayName: string;
  speaker: string;
  cover: {
    image: {
      desktop: FluidObject;
      mobile: FluidObject;
    };
  };
  duration;
  eventDisplayName?: string;
}
export interface ActiveFilters {
  searchPhrase: string;
  eventSlug: string;
  durationFilter: string;
}

export type FilterTalks = (
  searchPhrase: string,
  eventSlug: string,
  durationFilter: string
) => void;
export type SortTalks = (sortType: string) => void;

export interface WatchProps {
  headerTitle: string;
  headerSubtitle: string;
  talks: Talk[];
  eventNames: {};
  recommendedTalks: RecommendedTalk[];
}
