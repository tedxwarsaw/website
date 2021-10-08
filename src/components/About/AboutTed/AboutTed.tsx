import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./AboutTed.styled.css";
import {Lines} from "../../Lines/Lines";

interface TedSpeaker {
  name: string;
}

export interface AboutTedProps {
  aboutTedContent: string;
  aboutTedSpeakers: Array<TedSpeaker>;
}

export const AboutTed = (props: AboutTedProps) => (
  <div className="bg-customLightGrey main-grid-full-span relative">
    <Lines wider={true}/>
    <div className="seamless-grid pt-20 pb-20">
      <div className="flex items-top col-start-2 col-end-3">
        <h2>
          About <span className="text-customRed font-bold">TED</span>
        </h2>
      </div>
      <div className="col-start-2 col-end-3 mt-8 md:col-start-2 md:col-end-5 md:mt-8 xl:col-start-4 xl:col-end-7 xl:mt-0 font-normal z-10">
        <div className="about-ted-content">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {props.aboutTedContent}
          </ReactMarkdown>
        </div>

        <div className={"border-2 p-5 mt-8"}>
          <div className={"font-bold"}>TED speakers have included</div>
          <div>{`${props.aboutTedSpeakers
            .map((x: TedSpeaker) => x.name)
            .slice(0, props.aboutTedSpeakers.length - 2)
            .join(", ")} and ${
            props.aboutTedSpeakers.map((x: TedSpeaker) => x.name)[
              props.aboutTedSpeakers.length - 1
            ]
          }.`}</div>
        </div>
      </div>
    </div>
  </div>
);
