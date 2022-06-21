import { Navigate, Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home/Home';

export const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/travel-app" element={<Home />} />
      <Route path="*" element={<Navigate to="/travel-app" />} />
    </Routes>
  );
};
