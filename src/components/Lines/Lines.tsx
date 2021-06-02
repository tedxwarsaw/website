import React from "react";
import "./Lines.styled.css";

interface ILinesProps {
    onlyHorizontal?: boolean;
    wider?: boolean;
}

export const Lines = ({onlyHorizontal, wider}) => (
    <div className={`lines ${wider ? 'wider' : ''}`}>
        <div className="main-grid">
            <div className={"col-start-3 col-end-6 my-10 inner-grid gap-5 lines-grid"}>
                <div className={"line-container"}>
                    <div className={"guide-line"}/>
                    <div className={`guide-line ${onlyHorizontal ? 'hidden' : ''}`}/>
                </div>
                <div className={`line-container`}>
                    <div className={`guide-line ${onlyHorizontal ? 'hidden' : ''}`}/>
                    <div className={`guide-line ${onlyHorizontal ? 'hidden' : ''}`}/>
                </div>
                <div className={`line-container`}>
                    <div className={`guide-line ${onlyHorizontal ? 'hidden' : ''}`}/>
                    <div className={"guide-line"}/>
                </div>
            </div>
        </div>
    </div>
);
