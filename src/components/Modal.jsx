import { useState } from "react";

export default function Modal({ openModal, setOpenModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
    setName("");
    setPassword("");
  }
  return (
    <dialog open={openModal}>
      <form className="showForm" method="dialog">
        <div className="form-close-btn">
          <button onClick={onCloseModal}>x</button>
        </div>
        <h1> Sign up</h1>
        <div className="formContent">
          <label className="label">Name</label>
          <input className="form-input" defaultValue={name} type="text" />

          <label className="label">Email</label>
          <input className="form-input" defaultValue={email} type="email" />

          <label className="label">Password</label>
          <input
            className="form-input"
            defaultValue={password}
            type="password"
          />
        </div>
        <button className="form-submit-btn" type="submit">
          Submit
        </button>
      </form>
    </dialog>
  );
}
