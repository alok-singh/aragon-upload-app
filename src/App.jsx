import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import BackButtonSection from "./components/BackButtonSection"
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <BackButtonSection />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
