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
  <div>
    {relatedTalks && relatedTalks.length > 0 && (
      <div className=" mb-10">
        <h2 className="text-2xl md:text-3xl">More from</h2>
        <p className="text-2xl md:text-3xl font-bold">{eventName}</p>
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
