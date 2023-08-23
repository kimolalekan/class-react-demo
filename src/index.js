import "./styles/app.scss";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
