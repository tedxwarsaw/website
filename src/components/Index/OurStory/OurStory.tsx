import React from "react";
import { OurStoryProps } from "./OurStory.types";
import Img from "gatsby-image";
import {Link} from "gatsby";

export const OurStory = ({ ourStoryTitle, ourStoryItems }: OurStoryProps) => {

    let items = [];
    items.push(<p>{ourStoryTitle}</p>);
    ourStoryItems.forEach(item => {
        items.push(<p className="md:text-lg"><b>{item.boldText}</b> {item.text}</p>);
    });

    let storyItems = [];

    for(let i = 0; i < items.length; i += 2){
        storyItems.push([
            <div style={{display: "inline-block"}}>{items[i]}</div>,
            <div style={{display: "inline-block"}} className={"ml-20"}>{items[i+1]}</div>
        ]);
    }

    return <div className="bg-customLightGrey main-grid-full-span pt-10 pb-10">
        <div className="main-grid">
            <div className="inner-grid">
                {storyItems.map(item => <div>{item}</div>)}
            </div>
        </div>
    </div>
};
