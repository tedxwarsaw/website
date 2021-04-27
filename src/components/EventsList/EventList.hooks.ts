import { useState, useEffect } from "react";

export const useEventList = (events) => {
  const eventsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [eventsToShow, setEventsToShow] = useState(events);
  const [numberOfPages, setNumberOfPages] = useState(1);

  const paginateEvents = (eventsToPrepare, pageToChange) => {
    setCurrentPage(pageToChange);
    if (pageToChange === 1) {
      setEventsToShow([...eventsToPrepare.slice(0, eventsPerPage + 1)]);
      return;
    }
    setEventsToShow([
      ...eventsToPrepare.slice(
        (pageToChange - 1) * eventsPerPage + 1,
        (pageToChange - 1) * eventsPerPage + 1 + eventsPerPage
      ),
    ]);
    return;
  };

  const changePage = (page: number) => {
    paginateEvents(filteredEvents, page);
  };

  const filterEvents = (value: string) => {
    setActiveFilter(value);
    let eventsFiltered = [...events];
    if (value !== "all") {
      eventsFiltered = events.filter((event) => event.category === value);
    }
    setFilteredEvents(eventsFiltered);
    paginateEvents(eventsFiltered, 1);
  };

  useEffect(() => {
    setNumberOfPages(1 + Math.ceil(filteredEvents.length / eventsPerPage));
  }, [activeFilter]);

  return {
    activeFilter,
    filterEvents,
    eventsToShow,
    currentPage,
    changePage,
    numberOfPages,
  };
};
