import React from "react";
import { SearchBarForm } from "./SearchBarForm";
import { FilterList } from "./FilterList";

export const SearchBar = ({ activeFilters, filterTalks, eventNames }) => (
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
    />
  </div>
);
