import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { BsChevronUp } from "react-icons/bs";
import OutsideClickHandler from "react-outside-click-handler";
import { FormData } from "@/components/shared/Newsletter/NewsletterForm";
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
  register?: UseFormRegister<FormData>;
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
  register,
  noBorder,
}: SelectInputProps) => {
  const [isSelectActive, setIsSelectActive] = useState(false);

  const handleSelect = (value: string) => {
    handleOnChange(value);
    setIsSelectActive(false);
  };

  return (
    <div
      className={`my-3  xl:mx-4 cursor-pointer ${className ? className : ""}
      ${
        noBorder
          ? ""
          : "border border-customGrey border-opacity-50 rounded-md  xl:mx-4 "
      }
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
              const eventValue = register ? option.value : option.name;
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
            {register ? (
              <input
                name={name}
                placeholder={placeholder}
                {...register(name)}
                readOnly
                className="outline-none cursor-pointer bg-transparent"
              />
            ) : (
              <input
                name={name}
                placeholder={placeholder}
                value={selectedValue}
                readOnly
                className="outline-none cursor-pointer bg-transparent"
              />
            )}

            <BsChevronUp className="stroke-1" />
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};
