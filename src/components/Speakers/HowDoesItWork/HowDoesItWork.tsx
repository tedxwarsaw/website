import React from "react";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
import "./HowDoesItWork.styled.css";
import { Lines } from "../../Lines/Lines";

interface Step {
  name: string;
}

export interface HowDoesItWorkProps {
  howDoesItWorkTitle: string;
  howDoesItWorkSteps: Array<Step>;
}

export const HowDoesItWork = (props: HowDoesItWorkProps) => (
  <div className="main-grid-full-span relative">
    <Lines wider={true} />
    <div className="seamless-grid pt-20 pb-20 relative wider">
      <Lines />
      <div className="flex items-top col-start-2 col-end-3 text-2xl md:text-3xl font-bold">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {props.howDoesItWorkTitle}
        </ReactMarkdown>
      </div>
      <div className="col-start-2 col-end-3 mt-8 md:col-start-2 md:col-end-5 md:mt-8 xl:col-start-4 xl:col-end-7 xl:mt-0 font-normal steps">
        {props.howDoesItWorkSteps.map((step: Step, index: number) => (
          <div className={"step"}>
            {index == 0 && <span className={"dot-element"} />}
            {index == props.howDoesItWorkSteps.length - 1 && (
              <span className={"dot-element-two"} />
            )}
            {step.name}
          </div>
        ))}
      </div>
    </div>
  </div>
);
