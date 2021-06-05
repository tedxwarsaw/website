import React, { useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import OutsideClickHandler from "react-outside-click-handler";
import "./SelectInput.styled.css";

interface SelectInputProps {
  name: string;
  options: {
    name: string;
    value: string;
  }[];
  placeholder: string;
  handleOnChange: (value: string) => void;
  selectedValue?: string;
  wideDropdown?: boolean;
  className?: string;
  noBorder?: boolean;
}

export const SelectInput = ({
  name,
  options,
  selectedValue,
  handleOnChange,
  placeholder,
  wideDropdown,
  className,
  noBorder,
}: SelectInputProps) => {
  const [isSelectActive, setIsSelectActive] = useState(false);

  const handleSelect = (value: string) => {
    handleOnChange(value);
    setIsSelectActive(false);
  };

  return (
    <div
      className={`my-3  xl:mx-4 cursor-pointer 
      ${
        noBorder
          ? ""
          : "border border-customGrey border-opacity-50 rounded-md  xl:mx-4 "
      }
      ${className ? className : ""}
      `}
    >
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsSelectActive(false);
        }}
      >
        <div className="select-box p-4 ">
          <div
            className={`options-container z-10 py-4 border border-opacity-50 border-customGrey rounded-md shadow-xl	 ${
              isSelectActive ? "active" : ""
            } ${wideDropdown ? "wide-dropdown-select" : ""} `}
          >
            {options.map((option) => {
              const eventValue = option.name;
              return (
                <div
                  className="option px-4 py-2 cursor-pointer"
                  key={option.name}
                  onClick={() => handleSelect(eventValue)}
                >
                  <input
                    type="radio"
                    className="radio cursor-pointer"
                    id={option.name}
                    name={name}
                  />
                  <label htmlFor={option.name} className="cursor-pointer">
                    {option.value}
                  </label>
                </div>
              );
            })}
          </div>
          <div
            className="selected-value cursor-pointer"
            onClick={() => setIsSelectActive((prev) => !prev)}
          >
            <input
              name={name}
              placeholder={placeholder}
              value={selectedValue}
              readOnly
              className="outline-none cursor-pointer bg-transparent"
            />

            <BsChevronUp className="stroke-1" />
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};
