import { Route, Routes, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";

export const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/travel-app" element={<Home />} />
      <Route path="*" element={<Navigate to="/travel-app" />} />
    </Routes>
  );
};
