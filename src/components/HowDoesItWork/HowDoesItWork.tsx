import React from "react";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";

export interface HowDoesItWorkProps {
    howDoesItWorkTitle: string;
    howDoesItWorkContent: string;
    howDoesItWorkButtonLink: string;
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
