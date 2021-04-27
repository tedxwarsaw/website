export const useSearchBarForm = (eventNames, activeFilters, filterTalks) => {
  const eventOptions = Object.keys(eventNames).reduce((prev, current) => {
    return [...prev, { name: current, value: eventNames[current] }];
  }, []);

  const handleSearchChange = (e) => {
    filterTalks(
      e.target.value,
      activeFilters.eventSlug,
      activeFilters.durationFilter
    );
  };

  const handleEventFilterChange = (value: string) => {
    filterTalks(
      activeFilters.searchPhrase,
      value,
      activeFilters.durationFilter
    );
  };

  const handleDurationFilterChange = (value: string) => {
    filterTalks(activeFilters.searchPhrase, activeFilters.eventSlug, value);
  };
  return {
    eventOptions,
    handleSearchChange,
    handleEventFilterChange,
    handleDurationFilterChange,
  };
};
