import { useState } from "react";
import { usePagination } from "@/components/shared/Pagination";

export const durationOptions = [
  {
    name: "lessThan8",
    value: "< 8 min",
  },
  {
    name: "between8and15",
    value: "8-15 min",
  },
  {
    name: "moreThan15",
    value: "15+ min",
  },
];

export const useWatch = (talks) => {
  const [filteredTalks, setFilteredTalks] = useState(talks);
  const [activeFilters, setActiveFilters] = useState({
    searchPhrase: "",
    eventSlug: "",
    durationFilter: "",
  });
  const { itemsToShow, changePage, currentPage, numberOfPages } = usePagination(
    filteredTalks,
    9
  );

  const getMinutesAndSeconds = (duration: string) => {
    const durationValues = duration.split(":");
    const minutes = parseInt(durationValues[0]);
    const seconds = parseInt(durationValues[1]);

    return { minutes, seconds };
  };

  const durationFilters = {
    lessThan8: (duration: string) => {
      const { minutes } = getMinutesAndSeconds(duration);
      return minutes < 8;
    },
    between8and15: (duration: string) => {
      const { minutes } = getMinutesAndSeconds(duration);
      return minutes > 8 && minutes < 15;
    },
    moreThan15: (duration: string) => {
      const { minutes } = getMinutesAndSeconds(duration);
      return minutes > 15;
    },
  };

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
