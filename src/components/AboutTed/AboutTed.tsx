import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface TedSpeaker {
    name: string;
}

export interface AboutTedProps {
    aboutTedContent: string;
    aboutTedSpeakers: Array<TedSpeaker>;
}

export const AboutTed = (props : AboutTedProps) => (
    <div className="bg-customLightGrey main-grid-full-span">
        <div className="seamless-grid pt-20 pb-20">
            <div className="flex items-top col-start-2 col-end-3">
                <h2 className={"text-2xl md:text-3xl"}>About <span className="text-customRed font-bold">TED</span></h2>
            </div>
            <div className="col-start-2 col-end-3 mt-8 md:col-start-2 md:col-end-5 md:mt-8 xl:col-start-4 xl:col-end-7 xl:mt-0 font-normal">
                {<ReactMarkdown rehypePlugins={[rehypeRaw]}>{props.aboutTedContent}</ReactMarkdown>}
                <div className={"border p-5 mt-8"}>
                    <div className={"font-bold"}>TED speakers have included</div>
                    <div>{`${props.aboutTedSpeakers.map((x:TedSpeaker) => x.name).slice(0, props.aboutTedSpeakers.length - 2).join(", ")} and ${props.aboutTedSpeakers.map((x:TedSpeaker) => x.name)[props.aboutTedSpeakers.length - 1]}.`}</div>
                </div>
            </div>
        </div>
    </div>
);
