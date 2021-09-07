import React from "react";
import { Lines } from "../../Lines/Lines";

export interface PastEventsProps {
  pastEventsSectionTitle: string;
  pastEventsItems: {
    count: number;
    sectionName: string;
    description: string;
  }[];
}

export const PastEvents = ({
  pastEventsSectionTitle,
  pastEventsItems,
}: PastEventsProps) => (
  <div className="main-grid-full-span relative">
    <Lines wider={true} />

    <div className="main-grid py-16 relative">
      <h2 className="mb-5 xl:mb-10 font-bold">{pastEventsSectionTitle}</h2>
      <div className="inner-grid">
        <Lines wider={true} />
        {pastEventsItems.map((pastEvent, index) => (
          <div className="my-5 xl:my-0" key={index}>
            <span className="text-3xl md:text-4xl text-customRed font-bold">
              x{pastEvent.count}
            </span>
            <p className="my-5 font-bold">{pastEvent.sectionName}</p>
            <p>{pastEvent.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
