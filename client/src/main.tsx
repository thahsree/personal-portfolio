import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./components/index.ts";
import "./index.css";

import { About, Contact, Home, Work, Works } from "./Pages";
import Root from "./Root/Root.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "works",
        element: <Works />,
        errorElement: <ErrorPage />,
      },
      {
        path: "works/:id",
        element: <Work />,
        errorElement: <ErrorPage />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
