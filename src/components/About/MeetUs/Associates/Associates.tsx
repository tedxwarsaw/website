import React from "react";
import { Associate } from "../MeetUs.types";
import Img from "gatsby-image";

interface AssociatesProps {
  associates: Associate[];
}

export const Associates = ({ associates }: AssociatesProps) => (
  <>
    <h3 className="text-white font-semibold">Associates:</h3>
    <div className="col-start-1 col-end-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 grid-flow-row gap-20 my-10 text-3xl">
      {associates.map((associate, index) => (
        <div
          key={associate.name + index}
          className="flex flex-col justify-center items-center"
        >
          <Img
            className="rounded-full "
            fixed={associate.profileImage}
            alt="Associate profile image"
          />
          <p
            className="text-lg font-semibold text-white text text-center mt-5 mb-2"
            style={{ wordSpacing: "100000px" }}
          >
            {associate.name}
          </p>
          <p className="text-white font-light">{associate.title}</p>
        </div>
      ))}
    </div>
  </>
);
