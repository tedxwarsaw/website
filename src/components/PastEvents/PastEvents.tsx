import React from "react";

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
  <div className="my-16">
    <h2 className="text-2xl md:text-3xl mb-5 xl:mb-10">
      {pastEventsSectionTitle}
    </h2>
    <div className="inner-grid">
      {pastEventsItems.map((pastEvent, index) => (
        <div className="my-5 xl:my-0" key={pastEvent.title + index}>
          <span className="text-2xl md:text-3xl text-customRed">
            {pastEvent.title}
          </span>
          <p className="my-5">{pastEvent.sectionName}</p>
          <p>{pastEvent.description}</p>
        </div>
      ))}
    </div>
  </div>
);
