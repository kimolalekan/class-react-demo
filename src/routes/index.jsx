import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Faq from "../pages/Faq";
import Conversation from "../pages/Conversation";

const router = createBrowserRouter([
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
    path: "conversation",
    element: <Conversation />,
  },
]);

export default router;
