import React from "react";
import ReactMarkdown from "react-markdown";
import { WatchProps } from "./Watch.types";
import { WatchList } from "./WatchList";
import { Pagination } from "@/components/shared/Pagination";
import "./Watch.styled.css";

export const Watch = ({
  headerTitle,
  headerSubtitle,
  talks,
  eventNames,
}: WatchProps) => {
  return (
    <>
      <div className="main-grid-full-span pt-16 bg-customLightGrey">
        <div className="inner-grid">
          <div className="col-start-1 col-span-full flex justify-center flex-col text-center gap-5">
            <ReactMarkdown className="text-4xl watch-heading-md">
              {headerTitle}
            </ReactMarkdown>
            <p className="text-2xl">{headerSubtitle}</p>
          </div>
          {/* <SearchBar  /> */}
        </div>
      </div>
      <div className="pb-10">
        <WatchList talks={talks} eventNames={eventNames} />
        <Pagination
          numberOfPages={10}
          changePage={() => console.log("hello")}
          currentPage={1}
        />
      </div>
    </>
  );
};
