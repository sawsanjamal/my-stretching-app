import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Articles from "./pages/Articles";
import Stretches from "./pages/Stretches";
import Home from "./pages/Home";
import { Signup } from "./pages/Signup";
import MyStretches from "./pages/MyStretches";
import MyArticles from "./pages/MyArticles";
import Stretch from "./pages/Stretch";
import Article from "./pages/Article";
import Checkout from "./components/checkout/Checkout";

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
      { path: "/articles/:id", element: <Article /> }, // make this a child of `/stretches`
      { path: "/mystretches", element: <MyStretches /> },
      { path: "/myarticles", element: <MyArticles /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
]);
