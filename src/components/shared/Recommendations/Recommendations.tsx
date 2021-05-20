import React from "react";
import { CardTalk, CardEvent } from "@/components/shared/Card";
import { RecommendationsSlider } from "./RecommendationsSlider";
import { RecommendationsProps } from "./Recommendations.types";
import "./Recommendations.styled.css";

export const Recommendations = ({
  recommendations,
  recommendationsTitle,
  className
}: RecommendationsProps) => {
  return (
    <div className={`my-10 main-grid-full-span recommendations-container ${className && className}`}>
      <h2 className="font-medium text-2xl md:text-3xl font-bold">
        {recommendationsTitle ? recommendationsTitle : "TEDxWarsaw Recommends"}
      </h2>
      <RecommendationsSlider>
        {recommendations.map(({ item, order }) => (
          <div key={order} className="h-full">
            {item?.speaker ? (
              <CardTalk
                slug={item.slug}
                cover={item.cover}
                coverDesktop={item.coverDesktop}
                displayName={item.displayName}
                speaker={item.speaker}
                eventName={item.eventName}
                duration={item.duration}
              />
            ) : (
              <CardEvent
                slug={item.slug}
                cover={item.cover}
                coverDesktop={item.coverDesktop}
                displayName={item.displayName}
                date={item.date}
              />
            )}
          </div>
        ))}
      </RecommendationsSlider>
    </div>
  );
};
