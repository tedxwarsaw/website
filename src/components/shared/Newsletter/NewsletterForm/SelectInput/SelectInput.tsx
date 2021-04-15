import React, { useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import "./SelectInput.styled.css";

export const SelectInput = () => {
  const [isSelectActive, setIsSelectActive] = useState(false);
  const [selectValue, setSelectValue] = useState("Selected topic");

  return (
    <div className="my-3 border border-customGrey rounded-md md:col-start-2 md:col-end-3 xl:mx-4">
      <div className="select-box p-4 ">
        <div
          className={`options-container py-4 border border-customGrey rounded-md ${
            isSelectActive ? "active" : ""
          }`}
        >
          <div
            className="option px-4 py-2"
            onClick={() => setSelectValue("New events")}
          >
            <input type="radio" class="radio" id="newEvents" name="topic" />
            <label for="newEvents">New events</label>
          </div>
          <div className="option px-4 py-2">
            <input type="radio" class="radio" id="othertopic" name="topic" />
            <label for="newEvents">Inspirations staf</label>
          </div>
          <div className="option px-4 py-2">
            <input type="radio" class="radio" id="oneMore" name="topic" />
            <label for="newEvents">All</label>
          </div>
        </div>
        <div
          className="selected-value"
          onClick={() => setIsSelectActive((prev) => !prev)}
        >
          {selectValue}
          <BsChevronUp className="stroke-1" />
        </div>
      </div>
    </div>
  );
};
