import { createContext, useEffect, useState } from "react";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import { StretchesModal } from "./components/modals/stretchesModal";
import SignUpModal from "./components/modals/SignUpModal";
import {
  toggleLike,
  authenticate,
  toggleLikeArticle,
  clearCookies,
} from "./api/users";
import { getStretches } from "./api/stretches";
import { getArticles } from "./api/articles";
import Footer from "./components/Footer/Footer";
import { SkeletonTheme } from "react-loading-skeleton";

export const AppContext = createContext();

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [female, setFemale] = useState(true);
  const [user, setUser] = useState(null);
  const [stretches, setStretches] = useState([]);
  const [articles, setArticles] = useState([]);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const nav = useNavigate();
  const [muscleGroup, setMuscleGroup] = useState(null);
  const [modalOpen, setModalOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [isLoadingArticle, setIsLoadingArticle] = useState(true);

  useEffect(() => {
    if (user) {
      setModalOpen(false);
    } else if (!signUpModalOpen) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  }, [user, signUpModalOpen]);

  useEffect(() => {
    authenticate().then((res) => {
      setUser(res.user);
      getStretches().then(({ stretches }) => {
        setStretches(stretches);
        setIsLoading(false);
      });

      getArticles().then(({ articles }) => {
        setArticles(articles);
        setTimeout(() => {
          setIsLoadingArticle(false);
        }, 2000);
      });
    });

    const storedDarkMode = localStorage.getItem("DARK_MODE") === "true";
    setDarkMode(storedDarkMode);
  }, []);

  useEffect(() => {
    const articlesWithUserContext = user
      ? articles.map((article) => {
          return { ...article, liked: user.articles.includes(article._id) };
        })
      : articles;
    setArticles(articlesWithUserContext);
  }, [user]);

  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]);

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
  function handleLogout() {
    clearCookies();
    setUser(null);
    setModalOpen(true);
    setOpenDropdown(false);
    nav("/");
  }
  function toggleMuscleGroup(category) {
    const value = category === muscleGroup ? null : category;
    setMuscleGroup(value);
  }
  function signUp() {
    setModalOpen(false);
    setSignUpModalOpen(true);
  }
  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <AppContext.Provider
        value={{
          data: {
            user,
            stretches,
            modalOpen,
            signUpModalOpen,
            darkMode,
            articles,
            openDropdown,
            muscleGroup,
            female,
            collapsed,
            isLoading,
            isLoadingArticle,
          },
          methods: {
            setDarkMode,
            setUser,
            setStretches,
            setModalOpen,
            setSignUpModalOpen,
            handleLike,
            handleLikeArticle,
            setOpenDropdown,
            handleLogout,
            setMuscleGroup,
            setFemale,
            toggleMuscleGroup,
            signUp,
            setCollapsed,
            handleToggleSidebar,
            setIsLoading,
          },
        }}
      >
        <div className={darkMode ? "on" : "off"}>
          <Navbar />
          <div style={{ display: "flex" }}>
            <Sidebar />
            <div className="body">
              {renderModal()}
              <div
                className={`${
                  modalOpen || signUpModalOpen ? "blur" : ""
                } height-100`}
              >
                <Outlet />
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <ScrollRestoration />
      </AppContext.Provider>
    </SkeletonTheme>
  );
}
