import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./app/router.tsx";
import QueryProvider from "./app/providers/QueryProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <QueryProvider>
    <RouterProvider router={router} />,
  </QueryProvider>,
);
