import React from "react";
import { BackgroundImage } from "@/components/shared/BackgroundImage";
import { FluidObject } from "gatsby-image";
import { NewsletterForm } from "./NewsletterForm";
import "./Newsletter.styled.css";

export enum NewsletterVariant {
  black = "black",
  white = "white",
}

export interface NewsletterProps {
  variant: NewsletterVariant;
  newsletterTitle: string;
  newsletterMessage1?: string;
  newsletterMessage2: string;
  newsletterBackgroundImage?: FluidObject;
  newsletterBackgroundImageDesktop?: FluidObject;
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
      <div className="main-grid-full-span" id="newsletter">
        <BackgroundImage
          image={newsletterBackgroundImage}
          imageDesktop={newsletterBackgroundImageDesktop}
          alt="Newsletter backgound image"
          classNameChild="flex flex-col justify-end md:justify-center"
          className="newsletter-container"
        >
          <div className="seamless-grid mb-10 md:mb-0">
            <div className="col-start-2 col-end-3 pr-10 md:pr-0 mb-10">
              <h2 className="text-white font-medium">{newsletterTitle}</h2>
              <p className="text-white my-5">{newsletterMessage1}</p>
              <p className="text-white">{newsletterMessage2}</p>
            </div>
            <NewsletterForm />
          </div>
        </BackgroundImage>
      </div>
    );
  } else if (variant === NewsletterVariant.white) {
    return (
      <div className="main-grid-full-span" id="newsletter">
        <div className="bg-customLightGrey py-12">
          <div className="seamless-grid mb-10 md:mb-0">
            <div
              className={`col-start-2 col-end-7 inner-grid ${
                newsletterMessage1 ? "" : "mb-10"
              }`}
            >
              <h2 className="font-medium">{newsletterTitle}</h2>
              {newsletterMessage1 && (
                <p className="my-5 col-start-1 col-end-2 row-start-2">
                  {newsletterMessage1}
                </p>
              )}
              {newsletterMessage1 ? (
                <p className="col-start-1 col-end-2 row-start-3 md:col-start-2 md:col-end-3 md:row-start-2 my-5 ">
                  {newsletterMessage2}
                </p>
              ) : (
                <p>{newsletterMessage2}</p>
              )}
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>
    );
  }
};
