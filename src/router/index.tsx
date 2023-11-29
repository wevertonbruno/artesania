import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Projects from "../pages/projects";
import Products from "../pages/products";
import ProjectNew from "../pages/projects/new-project";
import ProjectView from "../pages/projects/view-project";

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
        path: "/projetos",
        element: <Projects />,
      },
      {
        path: "/projetos/novo-projeto",
        element: <ProjectNew />,
      },
      {
        path: "/projetos/:id",
        element: <ProjectView />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);
