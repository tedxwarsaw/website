import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Img, { FluidObject } from "gatsby-image";
import "./AboutUs.styled.css";
import {ContentPanel} from "../shared/ContentPanel";

export interface Content {
  content: string;
}

export interface MediaInitiatives {
  mediaInitiativesTitle: string;
  mediaInitiatives: Array<Content>;
}

export interface AboutUsProps {
  AboutUsTitle: string;
  AboutUsContent: string;
  AboutUsImage: FluidObject;
}

export const AboutUs = (props: AboutUsProps) => (
  <div className="main-grid-full-span">
    <div className={"main-grid mt-8"}>
      <div className={"flex col-start-2 col-end-5"}>
        <Img
          className="w-full h-full"
          fluid={props.AboutUsImage}
          alt="Slider item image"
        />
      </div>
    </div>
    <ContentPanel title={props.AboutUsTitle} content={props.AboutUsContent}/>
  </div>
);
