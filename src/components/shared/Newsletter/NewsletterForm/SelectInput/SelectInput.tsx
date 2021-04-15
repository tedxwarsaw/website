import React, { useState, useRef } from "react";
import { BsChevronUp } from "react-icons/bs";
import "./SelectInput.styled.css";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { FormData } from "../NewsletterForm";
interface SelectInputProps {
  options: {
    name: string;
    value: string;
  }[];
  register: UseFormRegister<FormData>;
  setValue: UseFormSetValue<FormData>;
}

export const SelectInput = ({
  options,
  register,
  setValue,
}: SelectInputProps) => {
  const [isSelectActive, setIsSelectActive] = useState(false);
  const selectFieldRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      selectFieldRef.current &&
      !selectFieldRef.current.contains(event.target)
    ) {
      setIsSelectActive(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  const handleSelect = (value: string) => {
    setValue("topic", value);
    setIsSelectActive(false);
  };

  return (
    <div
      className="my-3 border border-customGrey border-opacity-50 rounded-md md:col-start-2 md:col-end-3 xl:mx-4"
      ref={selectFieldRef}
    >
      <div className="select-box p-4 ">
        <div
          className={`options-container py-4 border border-opacity-50 border-customGrey rounded-md ${
            isSelectActive ? "active" : ""
          }`}
        >
          {options.map((option) => (
            <div
              className="option px-4 py-2 cursor-pointer"
              key={option.name}
              onClick={() => handleSelect(option.value)}
            >
              <input
                type="radio"
                className="radio"
                id={option.name}
                name="topic"
              />
              <label htmlFor={option.name}>{option.value}</label>
            </div>
          ))}
        </div>
        <div
          className="selected-value cursor-pointer"
          onClick={() => setIsSelectActive((prev) => !prev)}
          {...register("topic")}
        >
          <input
            name="topic"
            placeholder="Topic"
            {...register("topic")}
            readOnly
            className="outline-none"
          />
          <BsChevronUp className="stroke-1" />
        </div>
      </div>
    </div>
  );
};
