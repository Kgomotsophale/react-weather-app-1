import React from "react";
import Weather from "./components/Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Francisco" />
      </div>
    </div>
  );
}
