import React from "react";

interface FilterBlockProps {
  filterKey: string;
  filerValue: string;
  handleRemoveFilter: (value: string, filterKey: string) => void;
}

export const FilterBlock = ({
  filterKey,
  filerValue,
  handleRemoveFilter,
}: FilterBlockProps) => (
  <div>
    <p>{filerValue}</p>
    {/* <div onClick={() => handleRemoveFilter(filterValue, filterKey)}></div> */}
  </div>
);
