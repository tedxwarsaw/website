import React from "react";
import Img, { FluidObject } from "gatsby-image";
import "./AboutUs.styled.css";
import { ContentPanel } from "@/components/shared/ContentPanel";
import {Lines} from "../../Lines/Lines";

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
  <div className="main-grid-full-span relative">
    <Lines wider={true}/>
    <div className={"main-grid mt-16"}>
      <div className={"flex col-start-2 col-end-5"}>
        <Img
          className="w-full h-full"
          fluid={props.AboutUsImage}
          alt="Slider item image"
        />
      </div>
    </div>
    <ContentPanel title={props.AboutUsTitle} content={props.AboutUsContent} />
  </div>
);
