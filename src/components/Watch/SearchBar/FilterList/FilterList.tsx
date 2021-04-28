import React from "react";
import {
  ActiveFilters,
  FilterTalks,
  SortTalks,
} from "@/components/Watch/Watch.types";
import { FilterBlock } from "./FilterBlock";
import { SelectInput } from "@/components/shared/SelectInput";
import { useFitlerList } from "@/components/Watch/SearchBar/FilterList/FilterList.hooks";

interface FilterListProps {
  activeFilters: ActiveFilters;
  activeSorting: string;
  filterTalks: FilterTalks;
  sortTalks: SortTalks;
  eventNames: {};
}

export const FilterList = ({
  activeFilters,
  activeSorting,
  filterTalks,
  sortTalks,
  eventNames,
}: FilterListProps) => {
  const { handleRemoveFilter, sortOptions, filtersApplied } = useFitlerList(
    activeFilters,
    filterTalks
  );
  return (
    <div className="col-start-2 col-end-3 md:col-end-5 xl:col-end-7 py-5 flex items-center justify-between">
      <div className="flex items-center ">
        {activeFilters && filtersApplied && (
          <>
            <p className="mr-4">Active filters</p>
            {Object.keys(activeFilters).map(
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
          </>
        )}
      </div>
      <div className="flex items-center ">
        <p>Sort by</p>
        <SelectInput
          name="sortBy"
          placeholder="-"
          options={sortOptions}
          selectedValue={activeSorting}
          handleOnChange={sortTalks}
          noBorder
          className="w-36 text-centered-bold"
        />
      </div>
    </div>
  );
};
