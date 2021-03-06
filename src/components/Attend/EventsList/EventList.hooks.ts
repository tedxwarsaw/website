import { useState, useEffect } from "react";
import { usePagination } from "@/components/shared/Pagination";
import { useQueryParameters } from "@/hooks/useQueryParameters";

export const useEventList = (events) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredEvents, setFilteredEvents] = useState(events);
  const { itemsToShow, changePage, currentPage, numberOfPages } = usePagination(
    filteredEvents,
    9,
    1
  );

  const { qs, params, updateQueryParams } = useQueryParameters();

  const filterEvents = (value: string) => {
    setActiveFilter(value);
    let eventsFiltered = [...events];
    if (value !== "all") {
      eventsFiltered = events.filter((event) => event.category === value);
    }
    setFilteredEvents(eventsFiltered);

    const filterObject = {
      eventKind: value,
    };
    const paramsString = qs.stringify(filterObject);
    updateQueryParams(paramsString);
  };

  useEffect(() => {
    if (params.eventKind) {
      filterEvents(params.eventKind);
    }
  }, [params]);

  return {
    activeFilter,
    filterEvents,
    eventsToShow: itemsToShow,
    currentPage,
    changePage,
    numberOfPages,
  };
};
