import "./styles/app.scss";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./routes";
import store from "./stores/redux/store";

const container = document.getElementById("app");
const root = createRoot(container);
const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

root.render(<App />);
