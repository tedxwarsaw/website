import { durationValues } from "@/components/Watch/helpers";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./FilterBlock.styled.css";

interface FilterBlockProps {
  filterKey: string;
  filerValue: string;
  handleRemoveFilter: (filterKey: string) => void;
  eventNames: {};
}

export const FilterBlock = ({
  filterKey,
  filerValue,
  handleRemoveFilter,
  eventNames,
}: FilterBlockProps) => (
  <div className="rounded-md mx-1 py-2 pl-5 pr-10 border border-customGrey relative">
    <p>
      {eventNames[filerValue]
        ? eventNames[filerValue]
        : durationValues[filerValue]
        ? durationValues[filerValue]
        : filerValue}
    </p>
    <AiOutlineCloseCircle
      className="remove-filter-icon"
      onClick={() => handleRemoveFilter(filterKey)}
    />
  </div>
);
