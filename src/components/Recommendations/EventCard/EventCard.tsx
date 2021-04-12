import React from "react";
import { Button } from "@/components/shared/Button";
import { FaArrowRight } from "react-icons/fa";

interface EventCardProps {
  thumbnailImage: string;
  title: string;
  eventDate: string;
  attendLink: string;
  learnMoreLink: string;
}

export const EventCard = ({
  thumbnailImage,
  title,
  eventDate,
  attendLink,
  learnMoreLink,
}: EventCardProps) => (
  <div className="w-1/3 p-2 relative">
    <img src={thumbnailImage} alt="Event thumbnail image" />
    <span className="absolute left-0 top-0 bg-customRed text-white font-light text-sm px-3">
      UPCOMING
    </span>
    <div className="md:flex justify-between items-end my-5">
      <div>
        <span className="my-10">Title</span>
        <h3>{title}</h3>
      </div>
      <p>{eventDate}</p>
    </div>
    <div className="flex items-center ">
      <a
        href={attendLink}
        className="mb-5 md:mb-0 text-sm "
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Attend</Button>
      </a>
      <a
        href={learnMoreLink}
        className="text-customRed text-sm flex hover:opacity-50 items-center ml-5"
        style={{ width: "fit-content" }}
      >
        <span className="my-auto flex items-center">
          Learn more <FaArrowRight className="ml-3 " />
        </span>
      </a>
    </div>
  </div>
);
