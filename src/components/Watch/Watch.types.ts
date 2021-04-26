import { Talk } from "@/components/Watch/WatchList/WatchList.types";

export interface WatchProps {
  headerTitle: string;
  headerSubtitle: string;
  talks: Talk[];
  eventNames: {};
}
