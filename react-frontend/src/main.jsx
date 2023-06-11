import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ContextProvider } from "./contexts/ContextProvider";
import "./index.css";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      
      <RouterProvider router={router}></RouterProvider>
      <Footer />
    </ContextProvider>
  </React.StrictMode>
);
