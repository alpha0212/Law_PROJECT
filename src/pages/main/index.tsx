import React from "react";
import { Navbar, Intro, Introduction } from "src/components";

import { useMoveScroll } from "src/hooks/useMoveScroll";

export const MainPage: React.FC = () => {
  const { element, onMoveToElement } = useMoveScroll();
  return (
    <>
      <Navbar />
      <Intro />
      <Introduction />
    </>
  );
};
