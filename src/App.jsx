import { useState } from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import "./index.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div className={darkMode ? "on" : "off"}>
      <div className="parentModal">
        <Modal
          className="childModal"
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </div>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        setOpenModal={() => setOpenModal(!openModal)}
      />
      <div style={{ display: "flex" }}>
        <Sidebar setOpenModal={() => setOpenModal(!openModal)} />
        <Outlet />
      </div>
    </div>
  );
}
