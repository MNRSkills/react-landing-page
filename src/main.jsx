import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./App.jsx";
import ExamplePage from "./Pages/Examples/page.jsx";
import Tour from "./Pages/Tour/page.jsx";
import HelpPage from "./Pages/Help/page.jsx";
import Blog from "./Pages/Blog/page.jsx";
import Layout from "./layout.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/overview" element={<div>Overview Page</div>}/>
      <Route path="/example-page" element={<ExamplePage />} />
      <Route path="/Tour" element={<Tour />} />
      <Route path="/Help" element={<HelpPage />} />
      <Route path="/Blog" element={<Blog />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
