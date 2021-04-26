import React from "react";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
import {Button} from "../shared/Button";
import "./CenterTextSection.styled.css";

export interface CenterTextSectionProps {
    centerTextSectionTitle: string;
    centerTextSectionContent: string;
    centerTextSectionButtonLink: string;
}

export const CenterTextSection = (props : CenterTextSectionProps) => (
    <div className="main-grid-full-span bg-customLightGrey">
        <div className="main-grid centerTextSection pt-10">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} className="mt-8 centerText">
                {props.centerTextSectionTitle}
            </ReactMarkdown>
            <ReactMarkdown rehypePlugins={[rehypeRaw]} className="mt-8 centerText-70">
                {props.centerTextSectionContent}
            </ReactMarkdown>
            {props.centerTextSectionButtonLink &&
                <div className="col-start-3 col-end-6">
                    <Button children={<span>I'm in</span>} className="mt-10"/>
                </div>
            }
        </div>
    </div>
);
