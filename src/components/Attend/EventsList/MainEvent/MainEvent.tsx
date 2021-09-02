import React from "react";
import { splitTextInTwo } from "@/utils";
import { Link } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import moment from "moment";
import { HiMenuAlt2 } from "react-icons/hi";

interface MainEventProps {
  event: {
    displayName: string;
    slug: string;
    category: string;
    date: string;
    hook: string;
    cover: {
      image: {
        desktop: FluidObject;
        mobile: FluidObject;
      };
    };
  };
}

export const MainEvent = ({
  event: { displayName, slug, category, date, hook, cover },
}: MainEventProps) => {
  const dateConverted = moment(date, "DD/MM/YYYY");

  return (
    <div className="inner-grid col-start-1 col-end-2 md:col-end-3 xl:col-end-4 mb-10">
      <div className="col-start-1 md:col-end-2 xl:col-end-3">
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
      <div className="md:col-start-2 md:col-end-3 xl:col-start-3 xl:col-end-full flex flex-col space-y-6">
        <div className="mt-5 md:mt-0">
          <span className="text-white uppercase text-sm px-3 bg-customDarkGrey md:py-1 mr-3 font-bold">
            <Link to={`/event/${slug}`}>{category}</Link>
          </span>
          <span>{dateConverted.format("D MMMM YYYY")}</span>
        </div>
        <h2 className="my-5 xl:my-0">{displayName}</h2>
        <p>{hook}</p>
        <div className="flex-grow"></div>
        <div>
          <Link
            to={`/event/${slug}`}
            className="text-customRed text-sm flex hover:opacity-50 items-center my-5 xl:my-0"
          >
            <span className="text-customRed font-bold">
              Read more <HiMenuAlt2 className="inline w-6 h-6" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
