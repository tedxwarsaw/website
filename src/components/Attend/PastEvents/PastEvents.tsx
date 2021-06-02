import React from "react";
import {Lines} from "../../Lines/Lines";

export interface PastEventsProps {
  pastEventsSectionTitle: string;
  pastEventsItems: {
    title: string;
    sectionName: string;
    description: string;
  }[];
}

export const PastEvents = ({
  pastEventsSectionTitle,
  pastEventsItems,
}: PastEventsProps) => (
  <div className="py-16 relative">
    <Lines wider={true}/>
    <h2 className="mb-5 xl:mb-10 font-bold">
      {pastEventsSectionTitle}
    </h2>
    <div className="inner-grid">
      {pastEventsItems.map((pastEvent, index) => (
        <div className="my-5 xl:my-0" key={pastEvent.title + index}>
          <span className="text-3xl md:text-4xl text-customRed font-bold">
            {pastEvent.title}
          </span>
          <p className="my-5 font-bold">{pastEvent.sectionName}</p>
          <p>{pastEvent.description}</p>
        </div>
      ))}
    </div>
  </div>
);
