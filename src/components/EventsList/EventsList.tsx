import React, { useState, useEffect } from "react";
import { MainEvent } from "./MainEvent";
import { EventsListProps } from "@/components/EventsList";
import { EventGrid } from "@/components/EventsList/EventGrid/EventGrid";

export const EventsList = ({ events }: EventsListProps) => {
  const [activeFilter, setActiveFilter] = useState();
  const [eventsToShow, setEventsToShow] = useState(null);

  useEffect(() => {
    let tempEvents = [];
    for (let i = 0; i < 40; i++) {
      tempEvents.push({
        ...events[0],
        displayName: events[0].displayName + " " + i,
      });
    }
    if (activeFilter) {
      tempEvents.filter((event) => event.category === activeFilter);
    }
    setEventsToShow(tempEvents);
  }, [activeFilter, events]);

  return (
    <div>
      {eventsToShow && (
        <>
          <MainEvent event={eventsToShow.shift()} />
          <EventGrid events={eventsToShow} />
        </>
      )}
    </div>
  );
};
