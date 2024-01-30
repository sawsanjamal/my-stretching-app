import { createContext, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/SignUpModal";
import Sidebar from "./components/sidebar/Sidebar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import "./index.css";

export const ModalContext = createContext();

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <ModalContext.Provider value={{ setOpenModal }}>
      <div className={darkMode ? "off" : "on"}>
        <div className="parentModal">
          <Modal
            className="childModal"
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </div>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div style={{ display: "flex" }}>
          <Sidebar setOpenModal={() => setOpenModal(!openModal)} />
          <Outlet />
        </div>
      </div>
      <ScrollRestoration />
    </ModalContext.Provider>
  );
}
