import React from "react";
import { OurStoryProps } from "./OurStory.types";
import { Lines } from "../../Lines/Lines";

export const OurStory = ({ ourStoryTitle, ourStoryItems }: OurStoryProps) => (
  <div className="bg-customLightGrey main-grid-full-span py-10 relative">
    <Lines onlyHorizontal={true} />
    <div className="main-grid">
      <div className="inner-grid">
        <div className="pr-8 py-4 flex">
          <p>{ourStoryTitle}</p>
          {ourStoryItems.map(({ boldText, text }, i) => {
            if (i % 4 !== 0) return;
            return (
              <div className="px-8" key={i}>
                <p>
                  <b>{boldText}</b> {text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="px-8 py-4 flex">
          {ourStoryItems.map(({ boldText, text }, i) => {
            if (i % 4 !== 1 && i % 4 !== 2) return;
            return (
              <div className="pr-8" key={i}>
                <p>
                  <b>{boldText}</b> {text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="px-8 py-4 flex">
          {ourStoryItems.map(({ boldText, text }, i) => {
            if (i % 4 !== 3) return;
            return (
              <div className="pr-8" key={i}>
                <p>
                  <b>{boldText}</b> {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);
