import React from "react";
import { Route, Routes } from "react-router-dom";
import Box from "./pages/box";
import Index from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/box" element={<Box />} />
    </Routes>
  );
};

export default App;
