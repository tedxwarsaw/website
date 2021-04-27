import React from "react";
import { SearchBarForm } from "./SearchBarForm";

export const SearchBar = ({ activeFilters, filterTalks, eventNames }) => (
  <div className="main-grid">
    <SearchBarForm
      eventNames={eventNames}
      filterTalks={filterTalks}
      activeFilters={activeFilters}
    />
  </div>
);
