import { CardTalk } from "@/components/shared/Card";
import React from "react";
import { WatchListProps } from "./WatchList.types";
CardTalk;

export const WatchList = ({ talks, eventNames }: WatchListProps) => {
  return (
    <div className="my-10 inner-grid gap-5">
      {talks.map((talk) => (
        <CardTalk
          slug={talk.slug}
          cover={talk.cover.image.mobile}
          coverDesktop={talk.cover.image.desktop}
          displayName={talk.displayName}
          speaker={talk.speaker}
          eventName={eventNames[talk.eventSlug]}
          duration={talk.duration}
          key={talk.displayName}
        />
      ))}
    </div>
  );
};
