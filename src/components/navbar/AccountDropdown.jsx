import { useContext } from "react";
import { ModalContext } from "../../App";

export function AccountDropdown() {
  const { setOpenModal } = useContext(ModalContext);
  return (
    <div className="account-dropdown">
      <button className="dropdown-btn" onClick={() => setOpenModal(true)}>
        Sign Up / Log In
      </button>
    </div>
  );
}
