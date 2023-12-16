import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SignUp from "./routes/sign-up.tsx";
import Home from "./routes/home.tsx";
import Tips from "./routes/tips.tsx";
import Quiz from "./routes/quiz.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/tips",
    element: <Tips />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
