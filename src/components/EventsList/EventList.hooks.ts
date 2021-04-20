import { useState, useEffect } from "react";

export const useEventList = (events) => {
  const eventsPerPage = 9;
  const [pageOffset, setPageOffset] = useState(0);
  const [tempEvents, setTempEvents] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [eventsToShow, setEventsToShow] = useState(null);
  const [numberOfPages, setNumberOfPages] = useState(1);

  const paginateEvents = (eventsToPrepare, pageOffsetToChange) => {
    setPageOffset(pageOffsetToChange);
    if (pageOffsetToChange === 0) {
      setEventsToShow([
        ...eventsToPrepare.slice(pageOffset, eventsPerPage + 1),
      ]);
      return;
    }
    console.log(pageOffsetToChange, [
      ...eventsToPrepare.slice(
        pageOffsetToChange * eventsPerPage + 1,
        pageOffsetToChange * eventsPerPage + 1 + eventsPerPage
      ),
    ]);

    setEventsToShow([
      ...eventsToPrepare.slice(
        pageOffsetToChange * eventsPerPage + 1,
        pageOffsetToChange * eventsPerPage + 1 + eventsPerPage
      ),
    ]);
    return;
  };

  const changePage = (page: number) => {
    paginateEvents(filteredEvents, page - 1);
  };

  const filterEvents = (value: string) => {
    setActiveFilter(value);
    let eventsFiltered = [...tempEvents];
    if (value !== "all") {
      eventsFiltered = tempEvents.filter((event) => event.category === value);
    }
    setPageOffset(0);
    setFilteredEvents(eventsFiltered);
    paginateEvents(eventsFiltered, 0);
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
    setNumberOfPages((prev) =>
      Math.floor(prev + (tempEvents.length - 10) / eventsPerPage)
    );
    setTempEvents(tempEvents);
  }, []);

  return {
    activeFilter,
    filterEvents,
    eventsToShow,
    pageOffset,
    changePage,
    numberOfPages,
  };
};
