import { Button, ButtonVariant } from "@/components/shared/Button";
import React from "react";

interface BannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
}

export const Banner = ({
  title,
  subtitle,
  buttonText,
  buttonUrl,
}: BannerProps) => (
  <div className="main-grid-full-span h-96 bg-customRed flex flex-row items-center justify-center">
    <div className="text-4xl text-center text-white space-y-4 m-4">
      <div className="font-semibold">{title}</div>
      <div className="font-medium">{subtitle}</div>
      <div className="h-2" />
      <a href={buttonUrl} target="_blank" rel="noopener noreferrer">
        <Button
          variant={ButtonVariant.outlineWhite}
          className="font-normal text-lg px-20"
        >
          {buttonText}
        </Button>
      </a>
    </div>
  </div>
);
