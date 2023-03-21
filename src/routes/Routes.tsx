import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/home/Homepage";

function RoutesPage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default RoutesPage;
