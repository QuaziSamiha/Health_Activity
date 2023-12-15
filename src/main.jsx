import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Route";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-[#c2b3de] p-4 lg:p-8">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);
