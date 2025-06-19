// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import JournalPage from "./pages/JournalPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/journal",
    element: <JournalPage />,
  },
]);

export default router;
