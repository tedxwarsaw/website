import { RecommendedTalk } from "@/components/Watch/Watch.types";
import { FluidObject } from "gatsby-image";

export interface Talk {
  slug: string;
  displayName: string;
  speaker: string;
  eventSlug: string;
  cover: {
    image: {
      desktop: FluidObject;
      mobile: FluidObject;
    };
  };
  duration: string;
}

export interface WatchListProps {
  talks: Talk[];
  eventNames: {};
  recommendedTalks: RecommendedTalk[];
}
