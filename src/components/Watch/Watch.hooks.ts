import { useState } from "react";
import { usePagination } from "@/components/shared/Pagination";

export const useWatch = (talks) => {
  const [filteredTalks, setFilteredTalks] = useState(talks);
  const [activeFilters, setActiveFilters] = useState([]);
  const { itemsToShow, changePage, currentPage, numberOfPages } = usePagination(
    filteredTalks,
    9
  );

  const filterTalks = (
    searchPhrase: string,
    eventName: string,
    duration: string
  ) => {
    setActiveFilters([searchPhrase, eventName, duration]);
    let talksFiltered = [...talks];

    if (searchPhrase !== "") {
      talksFiltered = talksFiltered.filter((talk) =>
        Object(talk).some((val) =>
          val.toLowerCase().includes(searchPhrase.toLowerCase())
        )
      );
    }
    if (eventName !== "") {
      talksFiltered = talksFiltered.filter(
        (talk) => talk.eventName === eventName
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
