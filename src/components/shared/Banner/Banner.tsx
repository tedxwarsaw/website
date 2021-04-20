import { Button, ButtonVariant } from "@/components/shared/Button";
import React from "react";

export enum BannerVariant {
  red = "red",
  white = "white",
}

interface BannerProps {
  title: string;
  variant?: BannerVariant;
  subtitle?: string;
  buttonText: string;
  buttonUrl: string;
}

export const Banner = ({
  title,
  variant,
  subtitle,
  buttonText,
  buttonUrl,
}: BannerProps) => (
  <div
    className={`main-grid-full-span h-96 flex flex-row items-center justify-center ${
      variant === BannerVariant.white ? "bg-customLightGrey" : "bg-customRed"
    }`}
  >
    <div
      className={` text-center space-y-4 m-4 ${
        variant === BannerVariant.white ? "" : "text-white"
      }`}
    >
      <h2 className="text-3xl xl:text-4xl md:max-w-xl">{title}</h2>

      {subtitle && (
        <p
          className={`${
            variant === BannerVariant.white ? "" : "font-medium text-4xl"
          }`}
        >
          {subtitle}
        </p>
      )}

      <div className="h-2" />
      <a href={buttonUrl} target="_blank" rel="noopener noreferrer">
        <Button
          variant={
            (!variant || variant === BannerVariant.red) &&
            ButtonVariant.outlineWhite
          }
          className="font-normal text-lg px-20"
        >
          {buttonText}
        </Button>
      </a>
    </div>
  </div>
);
