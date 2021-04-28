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
    sortTalks,
    activeSorting,
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
        </div>
        <SearchBar
          activeFilters={activeFilters}
          activeSorting={activeSorting}
          filterTalks={filterTalks}
          sortTalks={sortTalks}
          eventNames={eventNames}
        />
        {talksToShow.length === 0 && (
          <div className="seamless-grid py-16">
            <div className="col-start-2 col-end-3 md:col-start-2 md:col-end-5 xl:col-start-2 xl:col-end-5 pr-52">
              <h2 className="text-2xl md:text-3xl">
                Sorry. We couldn't find a talk quite like that.
              </h2>
              <p>
                Looks like there weren't any talks matching your search
                criteria. Try using a more general term or searching with fewer
                filters
              </p>
            </div>
          </div>
        )}
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
