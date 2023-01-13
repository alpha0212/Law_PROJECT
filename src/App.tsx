import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, Navbar } from "src/components";
import { Content, HelpPage, SolutionPage } from "src/pages";

import { MainPage } from "./pages";
import { FirstPage } from "./pages/firstPage/index";
import { FirstHeader } from "src/components/common/FixComponents/FirstHeader";

export const App: React.FC = () => {
  /**
   * 조건문으로 메인에서 Navbar
   */
  const location = useLocation();
  const show = location.pathname.split("/")[1];
  if (show === "intro" || "content") {
    console.log(show);
  } else {
    console.log("firstHead");
  }
  return (
    <>
      {show === "" ? <FirstHeader /> : <Navbar />}
      <Routes>
        <Route index element={<FirstPage />} />
        <Route path="/intro" element={<MainPage />} />
        <Route path="/content" element={<Content />}>
          <Route path="defamation" element={<Content />} />
          <Route path="insult" element={<Content />} />
        </Route>
        <Route path="/solution" element={<SolutionPage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
      {show === "" ? <></> : <Footer />}
    </>
  );
};
