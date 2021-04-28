import { CardTalk } from "@/components/shared/Card";
import React from "react";
import { WatchListProps } from "./WatchList.types";
CardTalk;
import { RecommendationsSlider } from "@/components/Recommendations/RecommendationsSlider";

export const WatchList = ({
  talks,
  eventNames,
  recommendedTalks,
}: WatchListProps) => {
  console.log(recommendedTalks);
  return (
    <>
      {talks.length > 0 ? (
        <div className="col-start-3 col-end-6 my-10 inner-grid gap-5">
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
              noBadge
            />
          ))}
        </div>
      ) : (
        <div>
          <h2 className="font-medium text-2xl md:text-3xl font-bold w-32 pt-5">
            TEDxWarsaw Recommends
          </h2>
          <RecommendationsSlider>
            {recommendedTalks.map((item) => (
              <div key={item.displayName} className="h-full">
                <CardTalk
                  slug={item.slug}
                  cover={item.cover.image.mobile}
                  coverDesktop={item.cover.image.desktop}
                  displayName={item.displayName}
                  speaker={item.speaker}
                  eventName=""
                  duration={item.duration}
                  noBadge
                />
              </div>
            ))}
          </RecommendationsSlider>
        </div>
      )}
    </>
  );
};
