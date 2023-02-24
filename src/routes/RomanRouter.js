import React from "react";
import { Route, Routes } from "react-router-dom";
import Romans from "../components/Romans";

export default function RomanRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Romans />} />
    </Routes>
  );
}
