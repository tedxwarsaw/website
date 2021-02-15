import React, { useState } from "react";
import { Link } from "gatsby";
import { Props as NavbarProps } from "../Navbar";

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
  const [isAnimating, setIsAnimating] = useState(false);
  const onClose = async () => {
    setIsAnimating(true);
    // wait 150 ms because the transitions take that long
    await new Promise((r) => setTimeout(r, 150));
    setIsAnimating(false);
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
                  ${open && !isAnimating ? "bg-opacity-20" : "bg-opacity-0"}`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed h-screen w-80 bg-white shadow-xl z-30 transition
                    transform ${open && !isAnimating ? "" : "-translate-x-80"}`}
      >
        <button onClick={onClose}>x</button>
        <div>hello</div>
      </div>
    </div>
  );
};
