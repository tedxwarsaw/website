import React from "react";
import ReactMarkdown from "react-markdown";
import { WatchProps } from "./Watch.types";
import { SearchBar } from "./SearchBar";
import { WatchList } from "./WatchList";
import { Pagination } from "@/components/shared/Pagination";
import { useWatch } from "./Watch.hooks";
import "./Watch.styled.css";

export const Watch = ({
  headerTitle,
  headerSubtitle,
  talks,
  eventNames,
}: WatchProps) => {
  const {
    activeFilters,
    filterTalks,
    talksToShow,
    currentPage,
    numberOfPages,
    changePage,
  } = useWatch(talks);

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
          <SearchBar activeFilters={activeFilters} filterTalks={filterTalks} />
        </div>
      </div>
      <div className="pb-10">
        <WatchList talks={talksToShow} eventNames={eventNames} />
        {numberOfPages - 1 > 1 && (
          <Pagination
            numberOfPages={numberOfPages}
            changePage={changePage}
            currentPage={currentPage}
          />
        )}
      </div>
    </>
  );
};
