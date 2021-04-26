import React from "react";
import ReactMarkdown from "react-markdown";
import { WatchProps } from "./Watch.types";
import { WatchList } from "./WatchList";

export const Watch = ({
  headerTitle,
  headerSubtitle,
  talks,
  eventNames,
}: WatchProps) => {
  return (
    <div>
      <div>
        <ReactMarkdown>{headerTitle}</ReactMarkdown>
        <p className="w-full flex justify-center">{headerSubtitle}</p>
      </div>
      <WatchList talks={talks} eventNames={eventNames} />
    </div>
  );
};
