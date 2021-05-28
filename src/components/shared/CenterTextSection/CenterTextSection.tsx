import React from "react";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
import {Button, ButtonVariant} from "../Button";
import "./CenterTextSection.styled.css";
import { Link } from "gatsby";

export interface CenterTextSectionProps {
    centerTextSectionTitle: string;
    centerTextSectionContent: string;
    centerTextSectionButtonLink: string;
    centerTextSectionButtonText: string;
    centerTextSectionButtonLinkSecond?: string;
    centerTextSectionButtonTextSecond?: string;
    background?: string;
}

export const CenterTextSection = (props : CenterTextSectionProps) => {
    return <div className="main-grid-full-span bg-customLightGrey">
        <div className="main-grid centerTextSection pt-14 pb-14">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} className="mt-10 centerText text-2xl md:text-3xl font-bold">
                {props.centerTextSectionTitle}
            </ReactMarkdown>
            <ReactMarkdown rehypePlugins={[rehypeRaw]} className="mt-6 centerText-70">
                {props.centerTextSectionContent}
            </ReactMarkdown>
            {props.centerTextSectionButtonLink &&
                <div className="col-start-3 col-end-6">
                    <Link to={props.centerTextSectionButtonLink}>
                        <Button children={<span>{props.centerTextSectionButtonText}</span>} className="mt-10 hover:bg-white hover:text-customRed"/>
                    </Link>
                    {props.centerTextSectionButtonLinkSecond &&
                    <Link to={props.centerTextSectionButtonLinkSecond} className="text-customRed font-bold hover:opacity-50 mt-5 ml-10">
                      <span className="my-auto">
                          {props.centerTextSectionButtonTextSecond}
                      </span>
                    </Link>}
                </div>
            }
        </div>
    </div>
};
