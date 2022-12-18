import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Navbar } from "src/components";
import { Content } from "src/pages";

import { MainPage } from "./pages";
import { FirstPage } from "./pages/firstPage/index";

export const App: React.FC = () => {
  /**
   * 조건문으로 메인에서 Navbar
   */
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<FirstPage />} />
        <Route path="/intro" element={<MainPage />} />
        <Route path="/content" element={<Content />}>
          <Route path="defamation" element={<Content />} />
          <Route path="insult" element={<Content />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};
