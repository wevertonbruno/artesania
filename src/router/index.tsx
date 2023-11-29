import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Projects from "../pages/projects";
import Products from "../pages/products";
import ProjectNew from "../pages/projects/new-project";
import ProjectView from "../pages/projects/view-project";
import { Home as HomeIcon, Coffee, BookHeart } from "lucide-react";
import { ElementType, ReactNode } from "react";

interface Config {
  path: string;
  icon: ElementType;
  text: string;
  element: ReactNode;
  hidden?: boolean;
  children?: Config[];
}

export const routerConfig: Config[] = [
  {
    path: "/",
    icon: HomeIcon,
    text: "Home",
    element: <Home />,
  },
  {
    path: "/projetos",
    icon: BookHeart,
    text: "Projetos",
    element: <Projects />,
  },
  {
    path: "/projetos/novo-projeto",
    text: "Novo projeto",
    icon: BookHeart,
    hidden: true,
    element: <ProjectNew />,
  },
  {
    path: "/projetos/:id",
    text: "Projeto",
    icon: BookHeart,
    hidden: true,
    element: <ProjectView />,
  },
  {
    path: "/products",
    icon: Coffee,
    text: "Produtos",
    element: <Products />,
  },
];

routerConfig.flatMap((config) => {});

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routerConfig.map((config) => ({
      path: config.path,
      element: config.element,
      children: config.children?.map((config) => ({
        path: config.path,
        element: config.element,
      })),
    })),
  },
]);
