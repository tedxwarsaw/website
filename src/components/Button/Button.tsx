import React from "react";

export enum ButtonVariant {
  filledRed = "filledRed",
  outlineWhite = "outlineWhite",
}

const classes = {};
classes[ButtonVariant.filledRed] =
  "text-white bg-red-600 hover:bg-white hover:text-red-500";
classes[ButtonVariant.outlineWhite] =
  "border border-white text-white bg-transparent hover:bg-white hover:text-red-500";

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
}

export const Button = (props: Props): JSX.Element => (
  <button
    className={`p-2 px-6 rounded transform transition hover:scale-110
                active:scale-90 ${getButtonClasses(props.variant)}
                ${props.className != null ? props.className : ""}`}
  >
    {props.children}
  </button>
);
