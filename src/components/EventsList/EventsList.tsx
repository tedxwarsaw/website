import { MainEvent } from "./MainEvent";
import React from "react";
import { EventsListProps } from "@/components/EventsList";
import { EventGrid } from "@/components/EventsList/EventGrid/EventGrid";

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

      <EventGrid events={tempEvents} />
    </div>
  );
};
