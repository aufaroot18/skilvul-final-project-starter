import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutPage from "../pages/About";
import ErrorPage from "../pages/Error";
import HomePage from "../pages/Home";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
