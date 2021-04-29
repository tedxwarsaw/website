import React, { useEffect, useState } from "react";
import { SearchBarForm } from "./SearchBarForm";
import { FilterList } from "./FilterList";
import {
  ActiveFilters,
  FilterTalks,
  SortTalks,
} from "@/components/Watch/Watch.types";
import "./SearchBar.styled.css";

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
}: SearchBarProps) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = () => {
        setOffset(window.pageYOffset);
      };
    }
  }, []);

  useEffect(() => {
    console.log(offset);
  }, [offset]);

  return (
    <div
      className={`seamless-grid bg-customLightGrey duration-300 ${
        offset >= 260 ? "sticky-search-bar shadow-md" : ""
      }`}
    >
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
};
