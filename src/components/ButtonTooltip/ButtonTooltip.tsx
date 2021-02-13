import React from "react";
import { usePopperTooltip } from "react-popper-tooltip";
import "./ButtonTooltip.css";
import { Link } from "gatsby";

export interface Props {
  displayName: string;
  contents: Array<{
    title: string;
    description: string;
    path: string;
  }>;
}

export const ButtonTooltip = ({ displayName, contents }: Props) => {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({ delayHide: 250, trigger: ["hover", "click"] });

  return (
    <button
      className={`h-full flex flex-row items-center border-l px-6
                  ${visible && "bg-gray-200"}`}
      ref={setTriggerRef}
    >
      <span className="font-bold tracking-wide uppercase">{displayName}</span>
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({ className: "tooltip-container" })}
        >
          <div {...getArrowProps({ className: "tooltip-arrow" })} />
          <div className="font-normal tracking-normal normal-case space-y-4 p-6 max-w-sm text-left">
            {contents.map(({ title, description, path }, idx) => (
              <div key={idx} className="hover:text-gray-400">
                <Link to={path}>
                  <div className="font-bold">{title}</div>
                  <div className="font-light">{description}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </button>
  );
};
