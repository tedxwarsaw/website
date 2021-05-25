import React from "react";
import { SelectInput } from "@/components/shared/SelectInput";
import "./SearchBarForm.styled.css";
import { AiOutlineSearch } from "react-icons/ai";
import { durationOptions, durationValues } from "../../helpers";
import { useSearchBarForm } from "./SearchBarForm.hooks";
import { ActiveFilters, FilterTalks } from "@/components/Watch/Watch.types";

interface SearchBarFormProps {
  eventNames: {};
  filterTalks: FilterTalks;
  activeFilters: ActiveFilters;
}

export const SearchBarForm = ({
  eventNames,
  filterTalks,
  activeFilters,
}: SearchBarFormProps) => {
  const {
    eventOptions,
    handleSearchChange,
    handleEventFilterChange,
    handleDurationFilterChange,
  } = useSearchBarForm(eventNames, activeFilters, filterTalks);

  return (
    <div className="bg-white md:flex justify-between items-center xl:px-8 rounded-md font-light col-start-2 col-end-3 md:col-end-5 xl:col-end-7 flex-col px-4 py-1 xl:flex xl:flex-row shadow-sm z-10 search-bar-form">
      <div className="search-bar-form-fields xl:flex xl:flex-grow">
        <div className="my-3 relative border border-opacity-50 border-customGrey rounded-md md:row-start-1 md:col-start-2 md:col-end-5 xl:flex-grow ">
          <input
            className="p-4 rounded-md  w-full h-full outline-none search-field"
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
          name="event"
          options={eventOptions}
          selectedValue={
            eventNames[activeFilters.eventSlug]
              ? eventNames[activeFilters.eventSlug]
              : ""
          }
          handleOnChange={handleEventFilterChange}
          placeholder="Event"
          wideDropdown
          className="md:col-start-2 md:col-end-3 xl:mr-0"
        />

        <SelectInput
          name="duration"
          options={durationOptions}
          selectedValue={
            durationValues[activeFilters.durationFilter]
              ? durationValues[activeFilters.durationFilter]
              : ""
          }
          handleOnChange={handleDurationFilterChange}
          placeholder="Duration"
          className="md:col-start-4 md:col-end-5"
        />
      </div>
    </div>
  );
};
