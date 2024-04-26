import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function WithNavbar(props: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}