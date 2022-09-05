import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Content, Navbar } from "src/components";

import { MainPage } from "./pages";

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </>
  );
};
