
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Any from "./pages/Any"
import Apple from "./pages/Apple";
import Random from "./pages/Random";

const router = createBrowserRouter([
  { path: "/", element: <Apple /> },
  { path: "/ai", element: <Any /> },
  { path: "/ci", element: <Random />}
  
 
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
