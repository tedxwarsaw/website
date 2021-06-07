import React from "react";
import { RecommendedTalk } from "@/components/Watch/Watch.types";
import { RecommendationsSlider } from "@/components/shared/Recommendations/RecommendationsSlider";
import { CardTalk } from "@/components/shared/Card";
import "../../shared/Recommendations/Recommendations.styled.css";
import {Lines} from "../../Lines/Lines";

export interface RelatedTalksProps {
  relatedTalks: RecommendedTalk[];
  eventName: string;
}

export const RelatedTalks = ({
  relatedTalks,
  eventName,
}: RelatedTalksProps) => (
  <div className={"main-grid-full-span relative"}>
    <Lines onlyHorizontal={true} wider={true}/>
    {relatedTalks && relatedTalks.length > 0 && (
      <div
        className="main-grid-full-span recommendations-container pb-10"
        style={{ maxWidth: "100vw" }}
      >
        <h2>More from</h2>
        <p className="font-bold">{eventName}</p>
        <RecommendationsSlider>
          {relatedTalks.map((relatedTalk) => (
            <div key={relatedTalk.slug} className="h-full card-container">
              <CardTalk
                slug={relatedTalk.slug}
                cover={relatedTalk.cover.image.mobile}
                coverDesktop={relatedTalk.cover.image.desktop}
                displayName={relatedTalk.displayName}
                speaker={relatedTalk.speaker}
                eventName={relatedTalk.eventDisplayName}
                duration={relatedTalk.duration}
                noBadge
              />
            </div>
          ))}
        </RecommendationsSlider>
      </div>
    )}
  </div>
);
