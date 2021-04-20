import React from "react";
import Img, { FluidObject } from "gatsby-image";
import "../Card.styled.css";
import moment from "moment";
import { Link } from "gatsby";
import { HiMenuAlt2 } from "react-icons/hi";

interface CardEventAttendProps {
  slug: string;
  cover: FluidObject;
  coverDesktop: FluidObject;
  displayName: string;
  date?: string;
  category: string;
}

export const CardEventAttend = ({
  slug,
  cover,
  coverDesktop,
  displayName,
  date,
  category,
}: CardEventAttendProps) => {
  const dateConverted = moment(date);

  return (
    <div className=" pt-2 md:pt-3 pb-5 border-b-4 border-customTransparent  hover:border-customRed h-full flex flex-col">
      <a href={`/event/${slug}`}>
        <div className="relative card-image-container">
          <Img
            className="w-full h-full md:hidden"
            fluid={cover}
            alt="Slider item image"
          />
          <Img
            className="w-full h-full hidden md:block"
            fluid={coverDesktop}
            alt="Slider item image"
          />
        </div>
      </a>
      <span className="absolute left-0 top-0  text-white text-sm px-3 bg-customRed md:py-1">
        <a href={`/event/${slug}`}>{category}</a>
      </span>

      <a href={`/event/${slug}`}>
        <div className="md:flex justify-between items-end mb-2 mt-5 md:my-5">
          <div>
            <span className="my-10">
              {dateConverted.format("MMM Do, YYYY")}
            </span>
            <h3 className="min-h-10">{displayName}</h3>
          </div>
          <p>{date}</p>
        </div>
      </a>

      <div className="flex items-center mt-auto">
        <Link
          to={`/event/${slug}`}
          className="text-customRed text-sm flex hover:opacity-50 items-center ml-5"
        >
          <span className="text-customRed">
            Read more <HiMenuAlt2 className="inline w-6 h-6" />
          </span>
        </Link>
      </div>
    </div>
  );
};
