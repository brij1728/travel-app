import * as React from "react";

import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";

export const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/travel-app" element={<Home />} />
    </Routes>
  );
};
