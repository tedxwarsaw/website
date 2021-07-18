import { splitTextInTwo } from "@/utils";
import { Link } from "gatsby";
import moment from "moment";
import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import {Lines} from "../../Lines/Lines";

interface EventDetailsProps {
  location: {
    displayName: string;
    city: string;
  };
  date: string;
  time: string;
  description: string;
  slug: string;
}

export const EventDetails = ({
  location,
  description,
  slug,
  date,
}: EventDetailsProps) => {
  const descriptionSplit = splitTextInTwo(description);
  const dateConverted = moment(date, "DD/MM/YYYY");

  return (
    <div className="inner-grid py-10 relative">
      <Lines wider={true}/>
      <div className="gap-0 inner-grid">
        <div className="col-start-1 row-start-1 flex flex-col">
          <span className="font-bold">WHERE</span>
          <span className="md:hidden">
            {location.displayName}, {location.city}
          </span>
          <span className="mt-3 font-bold">WHEN</span>
          <span className="mt-3 md:hidden">
            {dateConverted.format("MMM Do, YYYY")}
          </span>
        </div>

        <div className="col-start-2 col-end-5 row-start-1 hidden md:flex flex-col">
          <span>
            {location.displayName}, {location.city}
          </span>
          <span className="mt-3">{dateConverted.format("D MMMM YYYY")}</span>
        </div>
      </div>
      <p className="xl:block hidden">{descriptionSplit[0]}</p>
      <div>
        <p className="xl:block hidden mb-5">{descriptionSplit[1]}</p>
        <p className="xl:hidden mt-5 md:mt-0 mb-5">{description}</p>
        <Link to={`/event/${slug}`}>
          <span className="text-customRed hover:opacity-50">
            Read more <HiMenuAlt2 className="inline w-6 h-6" />
          </span>
        </Link>
      </div>
    </div>
  );
};
