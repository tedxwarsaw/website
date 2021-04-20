import { useState, useEffect } from "react";

export const useEventList = (events) => {
  const eventsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [tempEvents, setTempEvents] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [eventsToShow, setEventsToShow] = useState(null);
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
    let eventsFiltered = [...tempEvents];
    if (value !== "all") {
      eventsFiltered = tempEvents.filter((event) => event.category === value);
    }
    setFilteredEvents(eventsFiltered);
    paginateEvents(eventsFiltered, 1);
  };

  useEffect(() => {
    for (let i = 0; i < 6; i++) {
      tempEvents.push({
        ...events[0],
        displayName: events[0].displayName + " " + i,
      });
      tempEvents.push({
        ...events[1],
        displayName: events[1].displayName + " " + i + i,
      });
    }
    console.log(tempEvents);
    setTempEvents(tempEvents);
    setFilteredEvents(tempEvents);
  }, []);

  useEffect(() => {
    console.log("pages change");
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
