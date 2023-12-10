import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./routes/root.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./routes/error-page.tsx";
import { HistoryPage } from "./routes/history.tsx";
import { Home } from "./routes/home.tsx";
import { UserPage } from "./routes/user.tsx";
import { ProgressionPage } from "./routes/progression.tsx";
import { WorkoutPage } from "./routes/workout.tsx";
import { AuthPage } from "./routes/auth.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/progression/:routine/:pair/:progression",
            element: <ProgressionPage />,
          },
          { path: "/workout/:name", element: <WorkoutPage /> },
          { path: "/auth", element: <AuthPage /> },
        ],
      },
      {
        path: "history",
        element: <HistoryPage />,
      },
      { path: "user", element: <UserPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
