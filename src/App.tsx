import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Content, Footer, Navbar } from "src/components";

import { MainPage } from "./pages";

export const App: React.FC = () => {
  /**
   * 조건문으로 메인에서 Navbar
   */
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/content" element={<Content />} />
      </Routes>
      <Footer />
    </>
  );
};
