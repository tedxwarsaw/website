import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./AboutTedEvents.styled.css";

export interface Content {
  content: string;
}

export interface MediaInitiatives {
  mediaInitiativesTitle: string;
  mediaInitiatives: Array<Content>;
}

export interface TedEventsProps {
  aboutTedEventsTitle: string;
  aboutTedEvents: Array<Content>;
  background?: string;
  titleFontClass?: string;
}

export const AboutTedEvents = (props: TedEventsProps) => (
  <div
    className={`${
      props.background == "white" ? "" : "bg-customLightGrey"
    } main-grid-full-span`}
  >
    <div className="main-grid pt-10 pb-10">
      <div
        className={`items-top ${props.titleFontClass} col-start-1 col-end-full`}
      >
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {props.aboutTedEventsTitle}
        </ReactMarkdown>
      </div>
      <div className="inner-grid mt-8 anchor-red">
        {props.aboutTedEvents.map((event: Content) => (
          <div className={"grid font-normal grid-cols-6 gap-4 mt-5 md:mt-1"}>
            <div className={"col-span-1 pt-3"}>
              <div className={"line"} />
            </div>
            <div className={"col-start-2 col-span-5"}>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {event.content}
              </ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
