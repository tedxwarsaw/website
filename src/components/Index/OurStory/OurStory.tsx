import React from "react";
import { OurStoryProps } from "./OurStory.types";
import { Lines } from "../../Lines/Lines";
import "./OurStory.styles.css";

export const OurStory = ({ ourStoryTitle, ourStoryItems }: OurStoryProps) => (
  <div className="bg-customLightGrey main-grid-full-span py-10 relative">
    <Lines onlyHorizontal={true} />
    <div className="main-grid">
      <div className="inner-grid our-story-desktop">
        <div className="pr-8 py-4 flex">
          <p>{ourStoryTitle}</p>
          {ourStoryItems.map(({ boldText, text }, i) => {
            if (i % 4 !== 0) return;
            return (
              <div className="px-14" key={i}>
                <p>
                  <b>{boldText}</b> {text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="py-4 flex">
          {ourStoryItems.map(({ boldText, text }, i) => {
            if (i % 4 !== 1 && i % 4 !== 2) return;
            return (
              <div className="pr-14" key={i}>
                <p>
                  <b>{boldText}</b> {text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="py-4 flex">
          {ourStoryItems.map(({ boldText, text }, i) => {
            if (i % 4 !== 3) return;
            return (
              <div className="pr-14" key={i}>
                <p>
                  <b>{boldText}</b> {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="inner-grid our-story-tablet">
        <div className="pr-8 py-4 flex justify-between">
          <p>{ourStoryTitle}</p>
          {ourStoryItems.map(({ boldText, text }, i) => {
            if (i % 4 !== 0 && i % 4 !== 1) return;
            return (
              <div className="px-8" key={i}>
                <p>
                  <b>{boldText}</b>
                </p>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
        <div className="py-4 flex justify-between">
          {ourStoryItems.map(({ boldText, text }, i) => {
            if (i % 4 !== 2 && i % 4 !== 3) return;
            return (
              <div className="pr-8" key={i}>
                <p>
                  <b>{boldText}</b>
                </p>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="inner-grid our-story-mobile">
        <div className="pr-8  flex flex-col justify-between">
          <p className="pb-8">{ourStoryTitle}</p>
          <div className="flex flex-wrap">
            {ourStoryItems.map(({ boldText, text }, i) => {
              return (
                <div className="pr-3" key={i}>
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
  </div>
);
