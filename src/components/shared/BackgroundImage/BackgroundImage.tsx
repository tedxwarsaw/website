import React from "react";
import Img, { FluidObject } from "gatsby-image";
import "./BackgroundImage.styled.css";

interface Props {
  image: FluidObject;
  imageDesktop?: FluidObject;
  alt?: string;
  className?: string;
  classNameChild?: string;
  style?: React.CSSProperties;
  styleChild?: React.CSSProperties;
  children: React.ReactNode;
}

export const BackgroundImage = (props: Props): JSX.Element => (
  <div
    style={props.style}
    className={`relative ${props.className != null ? props.className : ""}`}
  >
    <div
      style={props.styleChild}
      className={`absolute h-full w-full z-10 ${
        props.classNameChild != null ? props.classNameChild : ""
      }`}
    >
      {props.children}
    </div>
    <Img
      className={`h-full w-full z-0 ${
        props.imageDesktop ? "background-image-only-mobile" : ""
      }`}
      fluid={props.image}
      alt={props.alt}
    />
    {props.imageDesktop && (
      <Img
        className="h-full w-full z-0 background-image-only-desktop"
        fluid={props.imageDesktop}
        alt={props.alt}
      />
    )}
  </div>
);
