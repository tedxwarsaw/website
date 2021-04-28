import { useState, useEffect } from "react";

export const useFitlerList = (activeFilters, filterTalks) => {
  const [filtersApplied, setFiltersApplied] = useState(false);

  useEffect(() => {
    let applied = false;
    Object.keys(activeFilters).forEach((filter) => {
      console.log(activeFilters[filter]);
      if (activeFilters[filter] !== "") {
        applied = true;
      }
    });
    console.log("set");
    setFiltersApplied(applied);
  }, [activeFilters]);

  const sortOptions = [
    {
      name: "Newest",
      value: "Newest",
    },
    {
      name: "Oldest",
      value: "Oldest",
    },
  ];

  const handleRemoveFilter = (filterKey: string) => {
    if (filterKey === "searchPhrase") {
      filterTalks("", activeFilters.eventSlug, activeFilters.durationFilter);
    } else if (filterKey === "eventSlug") {
      filterTalks(activeFilters.searchPhrase, "", activeFilters.durationFilter);
    } else {
      filterTalks(activeFilters.searchPhrase, activeFilters.eventSlug, "");
    }
  };

  return { sortOptions, handleRemoveFilter, filtersApplied };
};
