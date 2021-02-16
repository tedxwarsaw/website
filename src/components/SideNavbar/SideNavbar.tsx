import React, { useState } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { IoMdClose } from "react-icons/io";
import {
  Props as NavbarProps,
  getLinkClasses,
  getButtonClasses,
} from "../Navbar";

interface Props extends NavbarProps {
  open: boolean;
  setOpen(value: boolean): void;
}

export const SideNavbar = ({
  imgFixed,
  navbarLinks,
  navbarButtons,
  setOpen,
  open,
}: Props) => {
  const [isClosing, setIsClosing] = useState(false);
  const onClose = async () => {
    setIsClosing(true);
    // wait 150 ms because the transitions take that long
    await new Promise((r) => setTimeout(r, 150));
    setIsClosing(false);
    setOpen(false);
  };

  return (
    <div
      className={`${
        open ? "visible" : "invisible"
      } absolute inset-0 w-screen h-screen`}
    >
      <div
        className={`fixed w-screen h-screen bg-black z-20 transition-colors
                  ${open && !isClosing ? "bg-opacity-20" : "bg-opacity-0"}`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed h-screen w-80 bg-white shadow-xl z-30 transition
                    transform ${open && !isClosing ? "" : "-translate-x-80"}`}
      >
        <div className="h-full text-md uppercase font-semibold">
          <div className="px-4 w-full flex flex-row justify-between">
            <Link to="/" className="h-16 flex flex-row items-center">
              <Img fixed={imgFixed} alt="Site logo" />
            </Link>
            <button onClick={onClose}>
              <IoMdClose className="w-8 h-8 text-red-500" />
            </button>
          </div>
          <div className="px-4 mt-4 mb-4 space-y-4">
            {navbarLinks.map((link, idx) => (
              <div>
                <Link
                  className={`text-md uppercase font-semibold ${getLinkClasses(
                    link.variant
                  )}`}
                  key={idx}
                  to={link.path}
                >
                  {link.displayName}
                </Link>
              </div>
            ))}
          </div>
          <div className="p-4 bg-gray-100 h-full space-y-4">
            {navbarButtons.map((button, idx) => (
              <div className="space-y-4">
                {button.isTooltip ? (
                  <>
                    <div className="font-light">{button.displayName}</div>
                    {button.tooltipContents.map((contents) => (
                      <div className="px-4">
                        <Link to={contents.path} key={idx}>
                          {contents.title}
                        </Link>
                      </div>
                    ))}
                  </>
                ) : (
                  <Link
                    className={`${getButtonClasses(button.variant)}`}
                    to={button.path}
                    key={idx}
                  >
                    {button.displayName}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
