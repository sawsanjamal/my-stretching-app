import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Articles from "./pages/Articles";
import Stretches from "./pages/Stretches";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/articles", element: <Articles /> },
      { path: "/stretches", element: <Stretches /> },
    ],
  },
]);
