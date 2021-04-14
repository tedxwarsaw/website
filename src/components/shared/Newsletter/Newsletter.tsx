import React from "react";
import { BackgroundImage } from "@/components/shared/BackgroundImage";
import { FluidObject } from "gatsby-image";

export interface NewsletterProps {
  newsletterTitle: string;
  newsletterMessage1: string;
  newsletterMessage2: string;
  newsletterBackgroundImage: FluidObject;
  newsletterBackgroundImageDesktop: FluidObject;
}

export const Newsletter = ({
  newsletterTitle,
  newsletterMessage1,
  newsletterMessage2,
  newsletterBackgroundImage,
  newsletterBackgroundImageDesktop,
}: NewsletterProps) => (
  <div className="main-grid-full-span">
    <BackgroundImage
      image={newsletterBackgroundImage}
      imageDesktop={newsletterBackgroundImageDesktop}
      alt="Newsletter backgound image"
      // style={{ height: "35rem" }}
      // classNameChild="flex flex-col justify-end md:justify-center"
    >
      <div>
        <div>
          <h2>{newsletterTitle}</h2>
          <p>{newsletterMessage1}</p>
          <p>{newsletterMessage2}</p>
        </div>
        <p>form</p>
      </div>
    </BackgroundImage>
  </div>
);
