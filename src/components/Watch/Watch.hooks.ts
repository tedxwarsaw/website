import { useState, useEffect } from "react";
import { usePagination } from "@/components/shared/Pagination";
import { durationFilters } from "@/components/Watch/helpers";
import { useQueryParameters } from "@/hooks/useQueryParameters";

export const useWatch = (talks) => {
  const [filteredTalks, setFilteredTalks] = useState(talks);
  const [activeFilters, setActiveFilters] = useState({
    searchPhrase: "",
    eventSlug: "",
    durationFilter: "",
  });
  const [activeSorting, setActiveSortings] = useState("Newest");
  const { itemsToShow, changePage, currentPage, numberOfPages } = usePagination(
    filteredTalks,
    21
  );

  const { qs, params, updateQueryParams } = useQueryParameters();

  const filterTalks = (
    searchPhrase: string,
    eventSlug: string,
    durationFilter: string
  ) => {
    const filters = {
      searchPhrase: searchPhrase,
      eventSlug: eventSlug,
      durationFilter: durationFilter,
    };

    setActiveFilters(filters);

    let talksFiltered = [...talks];

    if (searchPhrase) {
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
    if (eventSlug) {
      talksFiltered = talksFiltered.filter(
        (talk) => talk.eventSlug === eventSlug
      );
    }

    if (durationFilter) {
      talksFiltered = talksFiltered.filter((talk) =>
        durationFilters[durationFilter](talk.duration)
      );
    }
    setFilteredTalks(talksFiltered);

    const paramsString = qs.stringify(filters);
    updateQueryParams(paramsString);
    // location.search = params;
  };

  const sortTalks = (sortType) => {
    setActiveSortings(sortType);
    let talksSorted = [...filteredTalks];
    if (sortType !== "-") {
      if (sortType === "Newest") {
        talksSorted.sort((a, b) => b.date - a.date);
      } else {
        talksSorted.sort((a, b) => a.date - b.date);
      }
      setFilteredTalks(talksSorted);
    }
  };

  useEffect(() => {
    filterTalks(
      params?.searchPhrase,
      params?.eventSlug,
      params?.durationFilter
    );
  }, []);

  return {
    activeFilters,
    filterTalks,
    talksToShow: itemsToShow,
    currentPage,
    changePage,
    numberOfPages,
    sortTalks,
    activeSorting,
  };
};
