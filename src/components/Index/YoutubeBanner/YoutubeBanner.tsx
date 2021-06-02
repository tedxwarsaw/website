import React from "react";
import { Button, ButtonVariant } from "@/components/shared/Button";
import parse from "html-react-parser";
import {Lines} from "../../Lines/Lines";

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
      <div className={"relative main-grid-full-span"}>
          <Lines/>
          <div className="my-16 text-center flex flex-col justify-center align-center">
              <h2 className="font-medium mb-6 mx-auto md:w-96">
                  {parse(youtubeBannerHeading)}
              </h2>
              <a
                  href={youtubeBannerLinkUrl}
                  className="mb-5 md:mb-0 z-10"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <Button variant={ButtonVariant.filledGrey} className={"hover:bg-white hover:text-customRed"}>
                      {youtubeBannerLinkText}
                  </Button>
              </a>
          </div>
      </div>
  );
};
