import React from "react";
import { MainEvent } from "./MainEvent";
import { EventsListProps } from "@/components/EventsList";
import { ListFilters } from "@/components/EventsList/ListFilters";
import { CardEventAttend } from "@/components/shared/Card";
import { useEventList } from "./EventList.hooks";
import { Pagination } from "./Pagination";

export const EventsList = ({ events, categories }: EventsListProps) => {
  const {
    filterEvents,
    activeFilter,
    eventsToShow,
    currentPage,
    numberOfPages,
    changePage,
  } = useEventList(events);

  return (
    <div>
      <ListFilters
        filtersList={categories}
        changeFilter={filterEvents}
        activeFilter={activeFilter}
      />
      {eventsToShow && eventsToShow.length > 0 && (
        <>
          <div className="my-10 inner-grid gap-5">
            {eventsToShow.map((event, index) => {
              if (index === 0 && currentPage === 1) {
                return <MainEvent event={event} />;
              } else {
                return (
                  <CardEventAttend
                    key={event.displayName + index}
                    slug={event.slug}
                    cover={event.cover.image.mobile}
                    coverDesktop={event.cover.image.desktop}
                    displayName={event.displayName}
                    date={event.date}
                    category={event.category}
                  />
                );
              }
            })}
          </div>
        </>
      )}
      <Pagination
        numberOfPages={numberOfPages}
        changePage={changePage}
        currentPage={currentPage}
      />
    </div>
  );
};
