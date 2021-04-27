import React from "react";
import { ActiveFilters, FilterTalks } from "@/components/Watch/Watch.types";
import { FilterBlock } from "./FilterBlock";

interface FilterListProps {
  activeFilters: ActiveFilters;
  filterTalks: FilterTalks;
  eventNames: {};
}

export const FilterList = ({
  activeFilters,
  filterTalks,
  eventNames,
}: FilterListProps) => {
  const handleRemoveFilter = (filterKey: string) => {
    if (filterKey === "searchPhrase") {
      filterTalks("", activeFilters.eventSlug, activeFilters.durationFilter);
    } else if (filterKey === "eventSlug") {
      filterTalks(activeFilters.searchPhrase, "", activeFilters.durationFilter);
    } else {
      filterTalks(activeFilters.searchPhrase, activeFilters.eventSlug, "");
    }
  };

  return (
    <div className="col-start-2 col-end-3 md:col-end-5 xl:col-end-7 py-5">
      <div className="flex items-center ">
        <p className="mr-4">Active filters</p>
        {activeFilters &&
          Object.keys(activeFilters).map(
            (filterKey) =>
              activeFilters[filterKey] && (
                <FilterBlock
                  filterKey={filterKey}
                  filerValue={activeFilters[filterKey]}
                  handleRemoveFilter={handleRemoveFilter}
                  key={filterKey}
                  eventNames={eventNames}
                />
              )
          )}
      </div>
      <div></div>
    </div>
  );
};
