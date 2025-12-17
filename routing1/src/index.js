import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Managehabits from "./Pages/Managehabits";   
import Dashboard from "./Pages/Dashboard";
import Progress from "./Pages/Progress";
import Reminder from "./Pages/Reminder";

const routerVariables = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,  
      },
      {
        path: "/reminder",
        element: <Reminder />,
      },
      {
        path: "/managehabits",
        element: <Managehabits />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/progress",
        element: <Progress />,
      },
      {
        path: "*",
        element: <h1>Page Not Found - Check URL</h1>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routerVariables} />
  </React.StrictMode>
);

reportWebVitals();
