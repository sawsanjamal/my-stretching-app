import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Articles from "./pages/Articles";
import Stretches from "./pages/Stretches";
import Home from "./pages/Home";
import { Success, SuccessLogin } from "./pages/Success";
import { Signup } from "./pages/Signup";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/success", element: <Success /> },
      { path: "/successlogin", element: <SuccessLogin /> },

      { path: "/signup", element: <Signup /> },
      { path: "/articles", element: <Articles /> },
      { path: "/stretches", element: <Stretches /> },
    ],
  },
]);
