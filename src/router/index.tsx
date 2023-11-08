import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Projects from "../pages/projects";
import Components from "../pages/components";
import Products from "../pages/products";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/components",
        element: <Components />,
      },
    ],
  },
]);
