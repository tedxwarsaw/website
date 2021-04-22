import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Img, { FluidObject } from "gatsby-image";
import "./AboutTedWarsaw.styled.css";

export interface Content {
  content: string;
}

export interface MediaInitiatives {
  mediaInitiativesTitle: string;
  mediaInitiatives: Array<Content>;
}

export interface AboutTedWarsawProps {
  aboutTedWarsawTitle: string;
  aboutTedWarsawContent: string;
  aboutTedWarsawImage: FluidObject;
}

export const AboutTedWarsaw = (props: AboutTedWarsawProps) => (
  <div className="main-grid-full-span">
    <div className={"main-grid mt-8"}>
      <div className={"flex col-start-2 col-end-5"}>
        <Img
          className="w-full h-full"
          fluid={props.aboutTedWarsawImage}
          alt="Slider item image"
        />
      </div>
    </div>
    <div className="seamless-grid pt-20 pb-20">
      <div className="flex items-top col-start-2 col-end-3 text-2xl md:text-3xl">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {props.aboutTedWarsawTitle}
        </ReactMarkdown>
      </div>
      <div className="col-start-2 col-end-3 mt-8 md:col-start-2 md:col-end-5 md:mt-8 xl:col-start-4 xl:col-end-7 xl:mt-0 font-normal about-tedx-warsaw-content">
        {
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {props.aboutTedWarsawContent}
          </ReactMarkdown>
        }
      </div>
    </div>
  </div>
);
