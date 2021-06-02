import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import {Lines} from "../../Lines/Lines";

interface ContentPanel {
    title: string;
    content: string;
}

export const ContentPanel = ({title, content}: ContentPanel) => (
    <div className="seamless-grid pt-20 pb-20 relative">
        <Lines wider={true}/>
        <div className="flex items-top col-start-2 col-end-3 text-2xl md:text-3xl">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {title}
            </ReactMarkdown>
        </div>
        <div className="col-start-2 col-end-3 mt-8 md:col-start-2 md:col-end-5 md:mt-8 xl:col-start-4 xl:col-end-7 xl:mt-0 font-normal about-tedx-warsaw-content">
            {
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {content}
                </ReactMarkdown>
            }
        </div>
    </div>
);
