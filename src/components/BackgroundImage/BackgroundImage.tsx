import React from "react";
import Img, { FluidObject } from "gatsby-image";

interface Props {
  image: FluidObject;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const BackgroundImage = (props: Props): JSX.Element => (
  <div
    style={props.style}
    className={`relative ${props.className != null ? props.className : ""}`}
  >
    <div className="absolute h-full w-full z-10">{props.children}</div>
    <Img className="h-full w-full z-0" fluid={props.image} alt={props.alt} />
  </div>
);
