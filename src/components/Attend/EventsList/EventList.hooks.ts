import { useState } from "react";
import { usePagination } from "@/components/shared/Pagination";

export const useEventList = (events) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredEvents, setFilteredEvents] = useState(events);
  const { itemsToShow, changePage, currentPage, numberOfPages } = usePagination(
    filteredEvents,
    9
  );

  const filterEvents = (value: string) => {
    setActiveFilter(value);
    let eventsFiltered = [...events];
    if (value !== "all") {
      eventsFiltered = events.filter((event) => event.category === value);
    }
    setFilteredEvents(eventsFiltered);
  };

  return {
    activeFilter,
    filterEvents,
    eventsToShow: itemsToShow,
    currentPage,
    changePage,
    numberOfPages,
  };
};
