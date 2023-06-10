import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./routes/root.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./routes/error-page.tsx";
import { History } from "./routes/history.tsx";
import { Home } from "./routes/home.tsx";
import { Settings } from "./routes/settings.tsx";
import { ProgressionPage } from "./routes/progression.tsx";
import { EmptyRoot } from "./routes/emptyRoot.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "history",
        element: <History />,
      },
      { path: "settings", element: <Settings /> },
    ],
  },
  {
    path: "/",
    element: <EmptyRoot />,
    errorElement: <ErrorPage />,
    children: [{ path: "/progression/:name", element: <ProgressionPage /> }],
  },
  { path: "/progression/:name", element: <ProgressionPage /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
