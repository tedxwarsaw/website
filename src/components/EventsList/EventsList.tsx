import { FluidObject } from "gatsby-image";
import React from "react";

export interface EventsListProps {
  events: {
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
  }[];
}

export const EventsList = ({ events }: EventsListProps) => {
  console.log(events);
  return (
    <div>
      <h2>{events.length}Events</h2>
    </div>
  );
};
