import { MainEvent } from "./MainEvent";
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
  let tempEvents = [];
  for (let i = 0; i < 40; i++) {
    tempEvents.push({
      ...events[0],
      displayName: events[0].displayName + " " + i,
    });
  }

  console.log(tempEvents);
  return (
    <div>
      <MainEvent
        displayName={tempEvents[0].displayName}
        slug={tempEvents[0].slug}
        category={tempEvents[0].category}
        date={tempEvents[0].date}
        description={tempEvents[0].description}
        cover={tempEvents[0].cover}
      />
    </div>
  );
};
