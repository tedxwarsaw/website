import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

interface Props {
  children: React.ReactNode;
}

export const Page = (props: Props) => (
  <>
    <Navbar />
    <main className="main-grid" style={{ minHeight: "calc(100vh - 64px)" }}>
      {props.children}
    </main>
    <Footer />
  </>
);
