import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ContextProvider } from "./contexts/ContextProvider";
import "./index.css";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </ContextProvider>
  </React.StrictMode>
);
