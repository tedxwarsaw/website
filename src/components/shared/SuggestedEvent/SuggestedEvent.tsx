import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from "gatsby";
import Img, { FluidObject } from "gatsby-image";

interface SuggestedEventProps {
  displayName: string;
  slug: string;
  photos: FluidObject[];
}

export const SuggestedEvent = ({
  displayName,
  slug,
  photos,
}: SuggestedEventProps) => {
  return (
    <div className="inner-grid py-20 space-y-4">
      <div className="space-y-4 col-span-full">
        <div className="text-4xl font-bold">{displayName}</div>
        <div className="text-red-500 flex space-x-6">
          <Link
            to={`/watch?event=${slug}`}
            className="font-semibold hover:opacity-50 flex items-center"
          >
            Watch the talks <FaArrowRight className="ml-2 inline" />
          </Link>
          <Link
            to={`/event/${slug}/`}
            className="font-semibold hover:opacity-50 flex items-center"
          >
            Read more <HiMenuAlt2 className="ml-2 text-xl" />
          </Link>
        </div>
      </div>
      <div className="flex flew-nowrap overflow-scroll col-span-full">
        {photos.map((fluid, idx) => (
          <div
            key={idx}
            className="h-96"
            style={{
              minWidth: "var(--column-width)",
              width: "var(--column-width)",
              marginRight:
                idx + 1 !== photos.length ? "var(--column-gap)" : null,
            }}
          >
            <Img
              fluid={fluid}
              className="h-full w-full rounded"
              alt={`Photo from ${displayName}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
