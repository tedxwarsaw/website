import { Talk } from "@/components/Watch/WatchList/WatchList.types";

export interface WatchProps {
  headerTitle: string;
  headerSubtitle: string;
  talks: Talk[];
  eventNames: {};
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
