import { Button, ButtonVariant } from "@/components/shared/Button";
import React from "react";
import { FixedObject } from "gatsby-image";
import { Link } from "gatsby";

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
  logo?: FixedObject;
}

export const Banner = ({
  title,
  variant,
  subtitle,
  buttonText,
  buttonUrl,
}: BannerProps) => {
  return <div className={`main-grid-full-span h-96 flex flex-row items-center justify-center ${
          variant === BannerVariant.white ? "bg-customLightGrey" : "bg-customRed"
      }`}
  >
    <div className={`text-center ${variant === BannerVariant.white ? "" : "text-white"}`}>
      <h2 className="md:max-w-xl font-bold">{title}</h2>
      {subtitle && (
          <p className={`${variant === BannerVariant.white ? "" : "font-medium text-4xl"}`}>
            {subtitle}
          </p>
      )}

      <div className="h-2"/>
      <Link to={buttonUrl}>
        <Button
            variant={
              variant == null || variant === BannerVariant.red
                  ? ButtonVariant.outlineWhite
                  : ButtonVariant.filledRedWithBG
            }
            className="font-normal text-lg px-20 mt-6 hover:bg-white hover:text-customRed"
        >
          {buttonText}
        </Button>
      </Link>
    </div>
  </div>
};
