import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Button = (props: Props): JSX.Element => (
  <button
    className={`text-white p-2 px-6 bg-red-600 rounded hover:bg-white
                hover:text-red-500 transform transition hover:scale-110
                active:scale-90`}
  >
    {props.children}
  </button>
);
