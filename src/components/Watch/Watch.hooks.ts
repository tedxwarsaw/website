import { useState } from "react";
import { usePagination } from "@/components/shared/Pagination";

export const useWatch = (talks) => {
  const [filteredTalks, setFilteredTalks] = useState(talks);
  const [activeFilters, setActiveFilters] = useState({
    searchPhrase: "",
    eventSlug: "",
    duration: "",
  });
  const { itemsToShow, changePage, currentPage, numberOfPages } = usePagination(
    filteredTalks,
    9
  );

  const filterTalks = (
    searchPhrase: string,
    eventSlug: string,
    duration: string
  ) => {
    setActiveFilters({
      searchPhrase: searchPhrase,
      eventSlug: eventSlug,
      duration: duration,
    });

    console.log({
      searchPhrase: searchPhrase,
      eventName: eventSlug,
      duration: duration,
    });
    let talksFiltered = [...talks];

    if (searchPhrase !== "") {
      talksFiltered = talksFiltered.filter((talk) =>
        Object(talk).some((val) =>
          val.toLowerCase().includes(searchPhrase.toLowerCase())
        )
      );
    }
    if (eventSlug !== "") {
      talksFiltered = talksFiltered.filter(
        (talk) => talk.eventSlug === eventSlug
      );
    }

    if (duration !== "") {
      talksFiltered = talksFiltered.filter(
        (talk) => talk.duration === duration
      );
    }

    setFilteredTalks(talksFiltered);
  };

  return {
    activeFilters,
    filterTalks,
    talksToShow: itemsToShow,
    currentPage,
    changePage,
    numberOfPages,
  };
};
