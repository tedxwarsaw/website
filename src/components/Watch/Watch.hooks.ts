import { useState } from "react";
import { usePagination } from "@/components/shared/Pagination";

export const useWatch = (talks) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredTalks, setFilteredTalks] = useState(talks);
  const { itemsToShow, changePage, currentPage, numberOfPages } = usePagination(
    filteredTalks,
    9
  );

  const filterTalks = (value: string) => {
    setActiveFilter(value);
    let talksFiltered = [...talks];
    if (value !== "all") {
      talksFiltered = talks.filter((talk) => talk.category === value);
    }
    setFilteredTalks(talksFiltered);
  };

  return {
    activeFilter,
    filterTalks,
    talksToShow: itemsToShow,
    currentPage,
    changePage,
    numberOfPages,
  };
};
