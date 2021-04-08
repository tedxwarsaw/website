import React from "react";
import { Button, ButtonVariant } from "@/components/shared/Button";
import parse from "html-react-parser";

export interface YoutubeBannerProps {
  youtubeBannerHeading: string;
  youtubeBannerLinkText: string;
  youtubeBannerLinkUrl: string;
}

export const YoutubeBanner = ({
  youtubeBannerHeading,
  youtubeBannerLinkText,
  youtubeBannerLinkUrl,
}: YoutubeBannerProps) => {
  return (
    <div className="my-16 text-center flex flex-col justify-center align-center">
      <h2 className="mb-6 mx-auto text-2xl md:text-3xl md:w-96">
        {parse(youtubeBannerHeading)}
      </h2>
      <a
        href={youtubeBannerLinkUrl}
        className="mb-5 md:mb-0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant={ButtonVariant.filledGrey}>
          {youtubeBannerLinkText}
        </Button>
      </a>
    </div>
  );
};
