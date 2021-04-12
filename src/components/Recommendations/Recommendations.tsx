import React from "react";
import { EventCard } from "./EventCard";
import { TalkCard } from "./TalkCard";
import eventCover from "./event-cover.png";
import talkCover from "./talk-cover.png";

const recommendations = [
  {
    category: "event",
    thumbnailImage: eventCover,
    title: "TedxWarsaw Live",
    eventDate: "22.12.2020",
    attendLink: "/",
    learnMoreLink: "/",
  },
  {
    category: "talk",
    thumbnailImage: talkCover,
    speaker: "Agnieszka Trzeszczak",
    title: "Baby do garów - czy do muzyki trzeba się nadawać",
    talkEventName: "TEDxWarsaw 2019",
    duration: "13.45",
  },
  {
    category: "talk",
    thumbnailImage: talkCover,
    speaker: "Magdalena Król",
    title: "baby do garów - czy do muzyki trzeba się nadawać",
    talkEventName: "TEDxWarsaw 2018",
    duration: "13.45",
  },
];

export const Recommendations = () => {
  return (
    <div className="my-10">
      <h2 className="text-2xl md:text-3xl font-bold w-32">
        TEDxWarsaw Recommends
      </h2>
      <EventCard
        thumbnailImage={recommendations[0].thumbnailImage}
        title={recommendations[0].title}
        eventDate={recommendations[0].eventDate}
        attendLink={recommendations[0].attendLink}
        learnMoreLink={recommendations[0].learnMoreLink}
      />
      <TalkCard
        thumbnailImage={recommendations[1].thumbnailImage}
        speaker={recommendations[1].speaker}
        title={recommendations[1].title}
        talkEventName={recommendations[1].talkEventName}
        duration={recommendations[1].duration}
      />
    </div>
  );
};
