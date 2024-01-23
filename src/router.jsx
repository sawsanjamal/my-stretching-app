import { createBrowserRouter } from "react-router-dom";
import Articles from "./pages/Articles";
import Stretches from "./pages/Stretches";
import App from "./App";
import Home from "./pages/Home";
export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/articles", element: <Articles /> },
      { path: "/stretches", element: <Stretches /> },
    ],
  },
]);
