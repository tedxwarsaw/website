import React, { RefObject } from "react";
import "./Slider.styled.css";
import "keen-slider/keen-slider.min.css";

interface SliderProps {
  sliderRef: RefObject<HTMLElement>;
  children: JSX.Element[] | JSX.Element;
  style?: React.CSSProperties;
  className?: string;
}

export const Slider = ({
  sliderRef,
  children,
  style,
  className,
}: SliderProps) => {
  return (
    <div
      ref={sliderRef}
      className={`keen-slider ${className ? className : ""}`}
      style={style && { ...style }}
    >
      {React.Children.map(children || null, (child) => (
        <div className="keen-slider__slide" key={child.props.order}>
          <child.type {...child.props} />
        </div>
      ))}
    </div>
  );
};
