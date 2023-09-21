import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Faq from "../pages/Faq";
import Sample from "../pages/Sample";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "faq",
    element: <Faq />,
  },
  {
    path: "sample",
    element: <Sample />,
  },
]);

export default Routes;
