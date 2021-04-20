import React from "react";
import { splitTextInTwo } from "@/utils";
import { Link } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import moment from "moment";
import { HiMenuAlt2 } from "react-icons/hi";

interface MainEventProps {
  displayName: string;
  slug: string;
  category: string;
  date: string;
  description: string;
  cover: {
    image: {
      desktop: FluidObject;
      mobile: FluidObject;
    };
  };
}

export const MainEvent = ({
  displayName,
  slug,
  category,
  date,
  description,
  cover,
}: MainEventProps) => {
  const descriptionSplit = splitTextInTwo(description);
  const dateConverted = moment(date);

  return (
    <div className="inner-grid">
      <div className="col-start-1 col-end-3">
        <Link to={`/event/${slug}`}>
          <div className="relative h-full">
            <Img
              className="h-full md:hidden"
              fluid={cover.image.mobile}
              alt="Slider item image"
            />
            <Img
              className="w-full h-full hidden md:block"
              fluid={cover.image.desktop}
              alt="Slider item image"
            />
          </div>
        </Link>
      </div>
      <div className="col-start-3 col-end-full flex flex-col justify-between">
        <div>
          <span className="text-white text-sm px-3 bg-customDarkGrey md:py-1 mr-3">
            <Link to={`/event/${slug}`}>{category}</Link>
          </span>
          <span>{dateConverted.format("MMM Do, YYYY")}</span>
        </div>
        <h2 className="text-2xl md:text-3xl ">{displayName}</h2>
        <p>{descriptionSplit[0]}</p>
        <div>
          <Link
            to={`/event/${slug}`}
            className="text-customRed text-sm flex hover:opacity-50 items-center"
          >
            <span className="text-customRed">
              Read more <HiMenuAlt2 className="inline w-6 h-6" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
