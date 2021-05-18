import { FluidObject } from "gatsby-image";

export interface Event {
  description: string;
  displayName: string;
  slug: string;
  category: string;
  cover: {
    image: {
      mobile: FluidObject;
      desktop: FluidObject;
    };
  };
  date: string;
}

export interface EventsListProps {
  events: Event[];
  categories: string[];
}
