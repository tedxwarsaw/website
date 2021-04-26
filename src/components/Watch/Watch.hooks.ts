import { useState, useEffect } from "react";
import { usePagination } from "@/components/shared/Pagination";

export const useEventList = (events) => {
  const eventsPerPage = 9;
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [eventsToShow, setEventsToShow] = useState(events);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const { paginateItems, currentPage } = usePagination(eventsPerPage);

  const changePage = (page: number) => {
    setEventsToShow(paginateItems(filteredEvents, page));
  };

  const filterEvents = (value: string) => {
    setActiveFilter(value);
    let eventsFiltered = [...events];
    if (value !== "all") {
      eventsFiltered = events.filter((event) => event.category === value);
    }
    setFilteredEvents(eventsFiltered);
    setEventsToShow(paginateItems(eventsFiltered, 1));
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
