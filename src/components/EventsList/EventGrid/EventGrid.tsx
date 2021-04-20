import React from "react";
import { EventsListProps } from "../EventsList.types";
import { CardEventAttend } from "@/components/shared/Card";

export const EventGrid = ({ events }: EventsListProps) => {
  console.log(events);
  return (
    <div className="my-10 inner-grid gap-5">
      {events.map((event, index) => (
        <CardEventAttend
          key={event.displayName + index}
          slug={event.slug}
          cover={event.cover.image.mobile}
          coverDesktop={event.cover.image.desktop}
          displayName={event.displayName}
          date={event.date}
          category={event.category}
        />
      ))}
    </div>
  );
};
