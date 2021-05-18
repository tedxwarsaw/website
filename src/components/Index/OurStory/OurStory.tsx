import React from "react";
import { OurStoryProps } from "./OurStory.types";

export const OurStory = ({ ourStoryTitle, ourStoryItems }: OurStoryProps) => (
  <div className="bg-customLightGrey main-grid-full-span">
    <div className="main-grid">
      <div className="flex flex-wrap justify-start md:justify-center items-center py-10">
        <p className="mb-5 md:mb-0 md:text-lg md:mx-5 w-full md:w-auto">
          {ourStoryTitle}
        </p>
        {ourStoryItems.map((item) => (
          <div className="flex mr-5 md:mx-5 items-center " key={item.text}>
            <p className="font-bold md:text-lg mr-1">{item.boldText}</p>
            <p className="md:text-lg">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
