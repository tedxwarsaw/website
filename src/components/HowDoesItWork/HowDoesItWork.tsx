import React from "react";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";

interface Step {
    name: string
}

export interface HowDoesItWorkProps {
    howDoesItWorkTitle: string;
    howDoesItWorkSteps: Array<Step>;
}

export const HowDoesItWork = (props : HowDoesItWorkProps) => (
    <div className="main-grid-full-span">
        <div className="main-grid pt-10">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} className="mt-8">
                {props.howDoesItWorkTitle}
            </ReactMarkdown>
        </div>
    </div>
);
