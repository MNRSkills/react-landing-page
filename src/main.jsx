import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./App.jsx";
import ExamplePage from "./Pages/Examples/page.jsx";
import Tour from "./Pages/Tour/page.jsx"
import HelpPage from "./Pages/Help/page.jsx"
import Blog from "./Pages/Blog/page.jsx"
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/example-page",
    element: <ExamplePage/>,
  },
  {
    path: "/Tour",
    element: <Tour/>,
  },
  {
    path: "/Help",
    element: <HelpPage/>,
  },
  {
    path: "/Blog",
    element: <Blog/>,
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
