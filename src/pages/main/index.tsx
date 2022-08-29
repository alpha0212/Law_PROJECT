import React from "react";
import { Navbar, Intro, Introduction } from "src/components";

export const MainPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Introduction />
    </>
  );
};
