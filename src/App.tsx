import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Container } from "@mui/material";
import { Navbar } from "./common/Navbar";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/router";
import { NotificationProvider } from "./context/notification.context";

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <Suspense fallback={"Cargando..."}>
          <AppRouter></AppRouter>
        </Suspense>
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
