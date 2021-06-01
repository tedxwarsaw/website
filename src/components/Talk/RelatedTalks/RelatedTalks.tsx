import React from "react";
import { RecommendedTalk } from "@/components/Watch/Watch.types";
import { RecommendationsSlider } from "@/components/shared/Recommendations/RecommendationsSlider";
import { CardTalk } from "@/components/shared/Card";

export interface RelatedTalksProps {
  relatedTalks: RecommendedTalk[];
  eventName: string;
}

export const RelatedTalks = ({
  relatedTalks,
  eventName,
}: RelatedTalksProps) => (
  <div className="main-grid-full-span">
    {relatedTalks && relatedTalks.length > 0 && (
      <div className="recommendations-container mb-10">
        <h2>More from</h2>
        <p className="font-bold">{eventName}</p>
        <RecommendationsSlider>
          {relatedTalks.map((relatedTalk) => (
            <>
              <CardTalk
                slug={relatedTalk.slug}
                cover={relatedTalk.cover.image.mobile}
                coverDesktop={relatedTalk.cover.image.desktop}
                displayName={relatedTalk.displayName}
                speaker={relatedTalk.speaker}
                eventName={relatedTalk.eventDisplayName}
                duration={relatedTalk.duration}
                key={relatedTalk.displayName}
                noBadge
              />
            </>
          ))}
        </RecommendationsSlider>
      </div>
    )}
  </div>
);
