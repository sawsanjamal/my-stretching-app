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
import MyProfile from "./pages/MyProfile/MyProfile";

export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      { index: true, element: <Home /> },
      { path: "/signup", element: <Signup /> },
      {
        path: "/articles",

        children: [
          { index: true, element: <Articles /> },
          { path: ":id", element: <Article /> },
          { path: "myarticles", element: <MyArticles /> },
        ],
      },
      {
        path: "/stretches",
        children: [
          { index: true, element: <Stretches /> },
          { path: ":id", element: <Stretch /> },
          { path: "mystretches", element: <MyStretches /> },
        ],
      },

      { path: "/checkout/:subscriptionTier", element: <Checkout /> },
      { path: "/myprofile", element: <MyProfile /> },
    ],
  },
]);
