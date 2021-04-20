import React, { useState, useEffect } from "react";
import { MainEvent } from "./MainEvent";
import { EventsListProps } from "@/components/EventsList";
import { ListFilters } from "@/components/EventsList/ListFilters";
import { CardEventAttend } from "@/components/shared/Card";

export const EventsList = ({ events, categories }: EventsListProps) => {
  const [tempEvents, setTempEvents] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [eventsToShow, setEventsToShow] = useState(null);

  const filterPosts = (value) => {
    setActiveFilter(value);
    let eventsFiltered = tempEvents;
    console.log(eventsFiltered);
    if (value !== "all") {
      eventsFiltered = tempEvents.filter((event) => event.category === value);
    }

    setEventsToShow(eventsFiltered);
  };

  useEffect(() => {
    for (let i = 0; i < 40; i++) {
      tempEvents.push({
        ...events[0],
        displayName: events[0].displayName + " " + i,
      });
      tempEvents.push({
        ...events[1],
        displayName: events[1].displayName + " " + i + i,
      });
    }
    setTempEvents(tempEvents);
  }, []);

  return (
    <div>
      <ListFilters
        filtersList={categories}
        changeFilter={filterPosts}
        activeFilter={activeFilter}
      />
      {eventsToShow && eventsToShow.length > 0 && (
        <>
          <div className="my-10 inner-grid gap-5">
            {eventsToShow.map((event, index) => {
              if (index === 0) {
                return <MainEvent event={event} />;
              } else {
                return (
                  <CardEventAttend
                    key={event.displayName + index}
                    slug={event.slug}
                    cover={event.cover.image.mobile}
                    coverDesktop={event.cover.image.desktop}
                    displayName={event.displayName}
                    date={event.date}
                    category={event.category}
                  />
                );
              }
            })}
          </div>
        </>
      )}
    </div>
  );
};
