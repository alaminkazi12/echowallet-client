import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="container mx-auto h-screen mt-6 poppins">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);
