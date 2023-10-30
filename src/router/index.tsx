import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Projects from "../pages/projects";

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
    ],
  },
]);
