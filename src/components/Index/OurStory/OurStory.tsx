import React from "react";
import { OurStoryProps } from "./OurStory.types";

export const OurStory = ({ ourStoryTitle, ourStoryItems }: OurStoryProps) => (
  <div className="bg-customLightGrey main-grid-full-span py-10">
    <div className="main-grid">
      <div className="flex flex-wrap justify-center">
        <div className="px-8 py-4">{ourStoryTitle}</div>
        {ourStoryItems.map(({ boldText, text }, i) => (
          <div className="px-8 py-4" key={i}>
            <b>{boldText}</b> {text}
          </div>
        ))}
      </div>
    </div>
  </div>
);
