import React from "react";
import "./Lines.styled.css";

export const Lines = () => (
    <div className={"lines"}>
        <div className="main-grid">
            <div className={"col-start-3 col-end-6 my-10 inner-grid gap-5 lines-grid"}>
                <div className={"line-container"}>
                    <div className={"line"}/>
                    <div className={"line"}/>
                </div>
                <div className={"line-container"}>
                    <div className={"line"}/>
                    <div className={"line"}/>
                </div>
                <div className={"line-container"}>
                    <div className={"line"}/>
                    <div className={"line"}/>
                </div>
            </div>
        </div>
    </div>
);
