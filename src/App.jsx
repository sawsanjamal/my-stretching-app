import { createContext, useEffect, useState } from "react";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { StretchesModal } from "./components/modals/stretchesModal";
import SignUpModal from "./components/modals/SignUpModal";
import { toggleLike, authenticate, toggleLikeArticle } from "./api/users";
import { getStretches } from "./api/stretches";
import { getArticles } from "./api/articles";

export const AppContext = createContext();

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [user, setUser] = useState(null);
  const [stretches, setStretches] = useState([]);
  const [articles, setArticles] = useState([]);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    if (user) {
      setModalOpen(false);
    } else if (!signUpModalOpen) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  }, [user]);

  useEffect(() => {
    authenticate().then((res) => {
      setUser(res.user);
      getStretches().then(({ stretches }) => {
        setStretches(stretches);
      });
      getArticles().then(({ articles }) => {
        setArticles(articles);
      });
    });
  }, []);

  function renderModal() {
    if (signUpModalOpen) {
      return <SignUpModal />;
    }
    if (modalOpen) {
      return <StretchesModal />;
    }
  }

  function handleLike(stretchId) {
    toggleLike({ stretchId }).then(({ user }) => setUser(user));
  }
  function handleLikeArticle(articleId) {
    toggleLikeArticle({ articleId }).then(({ user }) => setUser(user));
  }

  return (
    <AppContext.Provider
      value={{
        data: {
          user,
          stretches,
          modalOpen,
          signUpModalOpen,
          darkMode,
          articles,
        },
        methods: {
          setDarkMode,
          setUser,
          setStretches,
          setModalOpen,
          setSignUpModalOpen,
          handleLike,
          setArticles,
          handleLikeArticle,
        },
      }}
    >
      <div className={darkMode ? "on" : "off"}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ flexGrow: 1, position: "relative", zIndex: 2 }}>
            {renderModal()}
            <div className={`${modalOpen || signUpModalOpen ? "blur" : ""}`}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </AppContext.Provider>
  );
}
