import { useState } from "react";
import { usePagination } from "@/components/shared/Pagination";
import { durationFilters } from "@/components/Watch/helpers";

export const useWatch = (talks) => {
  const [filteredTalks, setFilteredTalks] = useState(talks);
  const [activeFilters, setActiveFilters] = useState({
    searchPhrase: "",
    eventSlug: "",
    durationFilter: "",
  });
  const { itemsToShow, changePage, currentPage, numberOfPages } = usePagination(
    filteredTalks,
    21
  );

  const filterTalks = (
    searchPhrase: string,
    eventSlug: string,
    durationFilter: string
  ) => {
    setActiveFilters({
      searchPhrase: searchPhrase,
      eventSlug: eventSlug,
      durationFilter: durationFilter,
    });

    let talksFiltered = [...talks];

    if (searchPhrase !== "") {
      console.log(searchPhrase);
      talksFiltered = talksFiltered.filter((talk) =>
        Object.values(talk).some((val: string) => {
          if (typeof val === "string") {
            return val.toLowerCase().includes(searchPhrase.toLowerCase());
          } else {
            return false;
          }
        })
      );
    }
    if (eventSlug !== "") {
      talksFiltered = talksFiltered.filter(
        (talk) => talk.eventSlug === eventSlug
      );
    }

    if (durationFilter !== "") {
      talksFiltered = talksFiltered.filter((talk) =>
        durationFilters[durationFilter](talk.duration)
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
