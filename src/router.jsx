import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Articles from "./pages/Articles";
import Stretches from "./pages/Stretches";
import Home from "./pages/Home";
import { Signup } from "./pages/Signup";
import MyStretches from "./pages/MyStretches";
import Stretch from "./pages/Stretch";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/success", element: <Home /> },
      { path: "/successlogin", element: <Home /> },

      { path: "/signup", element: <Signup /> },
      { path: "/articles", element: <Articles /> },
      { path: "/stretches", element: <Stretches /> },
      { path: "/stretches/:id", element: <Stretch /> }, // make this a child of `/stretches`
      { path: "/mystretches", element: <MyStretches /> },
    ],
  },
]);
