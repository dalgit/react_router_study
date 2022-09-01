import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./pages/Users/Users";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}
