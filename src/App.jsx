import React from "react";
import "./App.css";
import CustomRoutes from "./routes";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="flex justify-between">
      <Navbar />
      <CustomRoutes />
    </div>
  );
}

export default App;