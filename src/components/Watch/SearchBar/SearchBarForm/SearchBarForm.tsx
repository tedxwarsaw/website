import React from "react";
import { SelectInput } from "./SelectInput";
import "./SearchBarForm.styled.css";
import { AiOutlineSearch } from "react-icons/ai";
import { durationOptions } from "../../Watch.hooks";

interface SearchBarFormProps {
  eventNames: {};
  filterTalks: (
    searchPhrase: string,
    eventSlug: string,
    durationFilter: string
  ) => void;
  activeFilters: {
    searchPhrase: string;
    eventSlug: string;
    durationFilter: string;
  };
}

export const SearchBarForm = ({
  eventNames,
  filterTalks,
  activeFilters,
}: SearchBarFormProps) => {
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

  return (
    <div className="bg-white md:flex justify-between items-center xl:px-8 rounded-md font-light col-start-2 col-end-3 md:col-end-5 xl:col-end-7 row-start-2 flex-col px-4 py-1 xl:flex xl:flex-row shadow-md sticky top-0 z-10">
      <div className="search-bar-form-fields xl:flex xl:flex-grow">
        <div className="my-3 relative border border-opacity-50 border-customGrey rounded-md md:row-start-1 md:col-start-2 md:col-end-5 xl:flex-grow ">
          <input
            className="p-4 rounded-md  w-full h-full outline-none"
            name="search"
            placeholder="Search"
            onChange={handleSearchChange}
          />
          <div
            className={`search-icon rounded-r-md ${
              activeFilters.searchPhrase !== ""
                ? "bg-customRed text-white"
                : " text-customRed"
            }`}
          >
            <AiOutlineSearch className="text-2xl" />
          </div>
        </div>

        <SelectInput
          options={eventOptions}
          selectedValue={eventNames[activeFilters.eventSlug]}
          handleOnChange={handleEventFilterChange}
          placeholder="Event"
          wideDropdown
          className="md:col-start-2 md:col-end-3"
        />

        <SelectInput
          options={durationOptions}
          selectedValue={durationOptions[activeFilters.durationFilter]}
          handleOnChange={handleDurationFilterChange}
          placeholder="Duration"
          className="md:col-start-4 md:col-end-5"
        />
      </div>
    </div>
  );
};
