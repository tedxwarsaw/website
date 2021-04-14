import React from "react";
import { BackgroundImage } from "@/components/shared/BackgroundImage";
import { FluidObject } from "gatsby-image";
import { NewsletterForm } from "./NewsletterForm";

export enum NewsletterVariant {
  black = "black",
  white = "white",
}

export interface NewsletterProps {
  variant: NewsletterVariant;
  newsletterTitle: string;
  newsletterMessage1: string;
  newsletterMessage2: string;
  newsletterBackgroundImage: FluidObject;
  newsletterBackgroundImageDesktop: FluidObject;
}

export const Newsletter = ({
  variant,
  newsletterTitle,
  newsletterMessage1,
  newsletterMessage2,
  newsletterBackgroundImage,
  newsletterBackgroundImageDesktop,
}: NewsletterProps) => {
  if (variant === NewsletterVariant.black) {
    return (
      <div className="main-grid-full-span">
        <BackgroundImage
          image={newsletterBackgroundImage}
          imageDesktop={newsletterBackgroundImageDesktop}
          alt="Newsletter backgound image"
          style={{ height: "33rem" }}
          classNameChild="flex flex-col justify-end md:justify-center"
        >
          <div className="seamless-grid">
            <div className="col-start-2 col-end-3 pr-10 md:pr-0">
              <h2 className="text-white font-medium text-2xl md:text-3xl">
                {newsletterTitle}
              </h2>
              <p className="text-white my-5">{newsletterMessage1}</p>
              <p className="text-white">{newsletterMessage2}</p>
            </div>
            <NewsletterForm />
          </div>
        </BackgroundImage>
      </div>
    );
  }
};
