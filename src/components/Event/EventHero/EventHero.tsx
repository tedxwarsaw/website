import React from "react";
import moment from "moment";
import { BackgroundImage } from "@/components/shared/BackgroundImage";
import { FluidObject } from "gatsby-image";
import { Button } from "@/components/shared/Button";

interface EventHeroProps {
  backgroundImage: FluidObject;
  backgroundImageDesktop: FluidObject;
  date: string;
  city: string;
  buttonShow: boolean;
  buttonText: string;
  buttonLink: string;
}

export const EventHero = ({
  backgroundImage,
  backgroundImageDesktop,
  date,
  city,
  buttonShow,
  buttonText,
  buttonLink,
}: EventHeroProps) => {
  const dateConverted = moment(date, "DD/MM/YYYY");
  return (
    <div className="main-grid-full-span">
      <BackgroundImage
        style={{ height: "40rem" }}
        image={backgroundImage}
        imageDesktop={backgroundImageDesktop}
        alt="Cover photo"
      >
        <div className="h-full overflow-hidden">
          <div className="h-full flex flex-row items-center">
            <div className="flex flex-col w-full items-center h-full justify-end p-20">
              <div className="text-center my-8 text-white text-medium text-3xl text-shadow">
                {dateConverted.format("D MMMM YYYY")}, {city}
              </div>
              {buttonShow && (
                <a href={buttonLink} target="_blank" rel="noopener noreferrer">
                  <Button className="px-20 shadow-2xl hover:bg-white hover:text-customRed">{buttonText}</Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};
