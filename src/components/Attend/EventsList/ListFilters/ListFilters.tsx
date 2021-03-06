import React from "react";

interface ListFiltersProps {
  filtersList: string[];
  changeFilter: (filter: string) => void;
  activeFilter: string;
}

export const ListFilters = ({
  filtersList,
  changeFilter,
  activeFilter,
}: ListFiltersProps) => (
  <div className="flex items-center flex-wrap my-5 font-semibold gap-y-5">
    <span className="text-customRed mr-7 z-10">Filter</span>
    <span
      className={`py-2 px-6 mx-2 rounded-md cursor-pointer z-10 ${
        activeFilter === "all"
          ? "bg-customDarkGrey text-white"
          : "bg-white text-black border border-1"
      }`}
      onClick={() => changeFilter("all")}
    >
      All Events
    </span>
    {filtersList.map((filter) => (
      <span
        className={`py-2 px-6 mx-2 rounded-md cursor-pointer z-10 ${
          activeFilter === filter
            ? "bg-customDarkGrey text-white"
            : "bg-white text-black border border-1"
        }`}
        key={filter}
        onClick={() => changeFilter(filter)}
      >
        {filter}
      </span>
    ))}
  </div>
);
