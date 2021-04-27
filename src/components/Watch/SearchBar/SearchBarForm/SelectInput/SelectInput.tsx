import React, { useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import OutsideClickHandler from "react-outside-click-handler";
import "./SelectInput.styled.css";

interface SelectInputProps {
  options: {
    name: string;
    value: string;
  }[];
  selectedValue: string;
  handleOnChange: (value: string) => void;
  placeholder: string;
  wideDropdown?: boolean;
  className?: string;
}

export const SelectInput = ({
  options,
  selectedValue,
  handleOnChange,
  placeholder,
  wideDropdown,
  className,
}: SelectInputProps) => {
  const [isSelectActive, setIsSelectActive] = useState(false);

  const handleSelect = (value: string) => {
    handleOnChange(value);
    setIsSelectActive(false);
  };

  return (
    <div
      className={`my-3 border border-customGrey border-opacity-50 rounded-md  xl:mx-4 cursor-pointer ${
        className ? className : ""
      }`}
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
            {options.map((option) => (
              <div
                className="option px-4 py-2 cursor-pointer"
                key={option.name}
                onClick={() => handleSelect(option.name)}
              >
                <input
                  type="radio"
                  className="radio cursor-pointer"
                  id={option.name}
                  name="topic"
                />
                <label htmlFor={option.name} className="cursor-pointer">
                  {option.value}
                </label>
              </div>
            ))}
          </div>
          <div
            className="selected-value cursor-pointer"
            onClick={() => setIsSelectActive((prev) => !prev)}
          >
            <input
              name="topic"
              placeholder={placeholder}
              value={selectedValue}
              readOnly
              className="outline-none cursor-pointer"
            />
            <BsChevronUp className="stroke-1" />
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};
