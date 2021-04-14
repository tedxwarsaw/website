import React from "react";
import { Button } from "@/components/shared/Button";
import { FaArrowRight } from "react-icons/fa";
import Img, { FluidObject } from "gatsby-image";
import "../Card.styled.css";

interface CardEventProps {
  slug: string;
  cover: FluidObject;
  coverDesktop: FluidObject;
  displayName: string;
  date?: string;
}

export const CardEvent = ({
  slug,
  cover,
  coverDesktop,
  displayName,
  date,
}: CardEventProps) => (
  <div className=" pt-2 md:pt-3  border-b-4 border-customTransparent  hover:border-customRed h-full flex flex-col">
    <div className="relative card-image-container">
      <a href={`/event/${slug}`}>
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
      </a>
    </div>
    <span className="absolute left-0 top-0  text-white text-sm px-3 bg-customRed md:py-1">
      UPCOMMING
    </span>

    <div className="md:flex justify-between items-end mb-2 mt-5 md:my-5">
      <div>
        <span className="font-bold my-10">Title</span>
        <h3 className="min-h-10">{displayName}</h3>
      </div>
      <p>{date}</p>
    </div>

    <div className="flex items-center mt-auto">
      <a
        href={`/attend/${slug}`}
        className="text-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Attend</Button>
      </a>
      <a
        href={`/event/${slug}`}
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
