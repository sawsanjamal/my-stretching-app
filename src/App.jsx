import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/SignUpModal";
import Sidebar from "./components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./index.css";
import { ToggleSwitch } from "./components/ToggleSwitch";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div className={darkMode ? "off" : "on"}>
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
