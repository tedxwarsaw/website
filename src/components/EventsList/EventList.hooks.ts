import { useState, useEffect } from "react";

export const useEventList = (events) => {
  const [tempEvents, setTempEvents] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [eventsToShow, setEventsToShow] = useState(null);

  const filterEvents = (value: string) => {
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

  return {
    activeFilter,
    filterEvents,
    eventsToShow,
  };
};
