import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Container } from "@mui/material";
import { Navbar } from "./common/Navbar";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/router";

function App() {
  return (
    <BrowserRouter>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
