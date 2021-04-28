import React from "react";
import { SearchBarForm } from "./SearchBarForm";
import { FilterList } from "./FilterList";
import {
  ActiveFilters,
  FilterTalks,
  SortTalks,
} from "@/components/Watch/Watch.types";

interface SearchBarProps {
  activeFilters: ActiveFilters;
  activeSorting: string;
  filterTalks: FilterTalks;
  sortTalks: SortTalks;
  eventNames: {};
}

export const SearchBar = ({
  activeFilters,
  activeSorting,
  filterTalks,
  sortTalks,
  eventNames,
}: SearchBarProps) => (
  <div className="seamless-grid">
    <SearchBarForm
      eventNames={eventNames}
      filterTalks={filterTalks}
      activeFilters={activeFilters}
    />
    <FilterList
      activeFilters={activeFilters}
      filterTalks={filterTalks}
      eventNames={eventNames}
      activeSorting={activeSorting}
      sortTalks={sortTalks}
    />
  </div>
);
