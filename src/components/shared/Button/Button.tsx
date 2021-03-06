import React from "react";

export enum ButtonVariant {
  filledRed = "filledRed",
  filledRedWithBG = "filledRedWithBG",
  outlineWhite = "outlineWhite",
  filledGrey = "filledGrey",
}

const classes = {};
classes[ButtonVariant.filledRed] =
  "border border-red-500  text-white bg-customRed hover:bg-white hover:text-customRed";
classes[ButtonVariant.filledRedWithBG] =
  "border border-red-500 text-white bg-customRed";
classes[ButtonVariant.outlineWhite] =
  "border border-white hover:border-red-500 text-white hover:bg-white hover:text-red-500";
classes[ButtonVariant.filledGrey] =
  "text-white bg-customDarkGrey hover:bg-white border border-customDarkGrey hover:text-customDarkGrey";

const getButtonClasses = (variant?: ButtonVariant): string => {
  if (variant == null || !classes.hasOwnProperty(variant)) {
    return classes[ButtonVariant.filledRed];
  } else {
    return classes[variant];
  }
};

interface Props {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
}

export const Button = (props: Props): JSX.Element => (
  <button
    className={`p-2 font-bold px-6 rounded ${getButtonClasses(props.variant)} ${
      props.className != null ? props.className : ""
    }`}
    style={{ transition: ".15s" }}
    type={props.type}
  >
    {props.children}
  </button>
);
