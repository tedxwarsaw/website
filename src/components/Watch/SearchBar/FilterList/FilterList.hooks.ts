export const useFitlerList = (activeFilters, filterTalks) => {
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

  return { sortOptions, handleRemoveFilter };
};
