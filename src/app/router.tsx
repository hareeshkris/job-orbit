import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import Home from "../features/home/pages/Home";
import Jobs from "../features/jobs/pages/Jobs";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "jobs",
          element: <Jobs />,
        },
      ],
    },
  ],
  {
    basename: "/job-orbit",
  },
);
