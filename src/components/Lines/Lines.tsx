import React from "react";
import "./Lines.styled.css";

interface ILinesProps {
  onlyHorizontal?: boolean;
  wider?: boolean;
  color?: string;
  colorRight?: string;
  zIndex?: number;
}

export const Lines = ({ onlyHorizontal, wider, color, zIndex, colorRight }: ILinesProps) => (
  <div className={`lines ${wider ? "wider" : ""}`} style={{zIndex: zIndex ? zIndex : 1}}>
    <div className="main-grid">
      <div
        className={"col-start-3 col-end-6 my-10 inner-grid gap-5 lines-grid"}
      >
        <div className={"line-container"}>
          <div className={"guide-line"} style={{borderColor: color ? color : 'inherit'}}/>
          <div className={`guide-line ${onlyHorizontal ? "hidden" : ""}`} style={{borderColor: color ? color : 'inherit'}} />
        </div>
        <div className={`line-container`}>
          <div className={`guide-line ${onlyHorizontal ? "hidden" : ""}`} style={{borderColor: color ? color : 'inherit'}} />
          <div className={`guide-line ${onlyHorizontal ? "hidden" : ""}`} style={{borderColor: color ? color : 'inherit'}} />
        </div>
        <div className={`line-container`}>
          <div className={`guide-line ${onlyHorizontal ? "hidden" : ""}`} style={{borderColor: color ? color : 'inherit'}} />
          <div className={"guide-line"} style={{borderColor: color ? color : (colorRight ? colorRight : 'inherit')}} />
        </div>
      </div>
    </div>
  </div>
);
