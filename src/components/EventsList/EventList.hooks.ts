import { useState, useEffect } from "react";
import { usePagination } from "@/components/shared/Pagination";

export const useEventList = (events) => {
  const eventsPerPage = 9;
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const { itemsToShow, changePage, currentPage } = usePagination(
    filteredEvents,
    eventsPerPage
  );

  const filterEvents = (value: string) => {
    setActiveFilter(value);
    let eventsFiltered = [...events];
    if (value !== "all") {
      eventsFiltered = events.filter((event) => event.category === value);
    }
    setFilteredEvents(eventsFiltered);
  };

  useEffect(() => {
    setNumberOfPages(1 + Math.ceil(filteredEvents.length / eventsPerPage));
  }, [activeFilter, filteredEvents]);

  return {
    activeFilter,
    filterEvents,
    eventsToShow: itemsToShow,
    currentPage,
    changePage,
    numberOfPages,
  };
};
