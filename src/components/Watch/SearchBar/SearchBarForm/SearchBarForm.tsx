import React from "react";
import { SelectInput } from "./SelectInput";
import "./SearchBarForm.styled.css";

interface SearchBarFormProps {
  eventNames: {};
  filterTalks: (
    searchPhrase: string,
    eventSlug: string,
    duration: string
  ) => void;
  activeFilters: {
    searchPhrase: string;
    eventSlug: string;
    duration: string;
  };
}

export const SearchBarForm = ({ eventNames, filterTalks, activeFilters }) => {
  const eventOptions = Object.keys(eventNames).reduce((prev, current) => {
    return [...prev, { name: current, value: eventNames[current] }];
  }, []);

  const handleEventFilterChange = (value: string) => {
    filterTalks(activeFilters.searchPhrase, value, activeFilters.duration);
  };

  return (
    <div className="bg-white md:flex justify-between items-center xl:px-8 rounded-md font-light col-start-2 col-end-3 md:col-end-5 xl:col-end-7 row-start-2 flex-col px-4 py-1 xl:flex xl:flex-row shadow-md">
      <div className="search-bar-form-fields xl:flex xl:flex-grow">
        <input
          className="my-3 p-4 border border-opacity-50 border-customGrey rounded-md md:row-start-2 md:col-start-2 md:col-end-3 xl:flex-grow "
          name="name"
          placeholder="Name"
        />
        <SelectInput
          options={eventOptions}
          selectedValue={activeFilters.eventName}
          handleOnChange={handleEventFilterChange}
          placeholder="Event"
        />
        <input
          className="my-3 p-4 border border-opacity-50 border-customGrey rounded-md  md:row-start-2 md:col-start-4 md:col-end-5 xl:flex-grow xl:mx-4 "
          name="email"
          placeholder="Email"
        />
      </div>
    </div>
  );
};
