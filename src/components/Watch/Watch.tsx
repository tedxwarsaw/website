import React from "react";
import ReactMarkdown from "react-markdown";

export interface WatchProps {
  headerTitle: string;
  headerSubtitle: string;
}

export const Watch = ({ headerTitle, headerSubtitle }: WatchProps) => {
  return (
    <div>
      <div>
        <ReactMarkdown>{headerTitle}</ReactMarkdown>
        <p className="w-full flex justify-center">{headerSubtitle}</p>
      </div>
    </div>
  );
};
