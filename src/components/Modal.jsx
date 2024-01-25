import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "./Input";

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
  const methods = useForm();
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <dialog className="dialog" open={openModal}>
      <FormProvider {...methods}>
        <form
          onSubmit={onSubmit}
          noValidate
          className="showForm"
          method="dialog"
        >
          <div className="form-close-btn">
            <button onClick={onCloseModal}>x</button>
          </div>
          <h1> Sign up</h1>
          <div className="formContent">
            <Input
              id="name"
              label="name"
              type="text"
              placeholder="type your name..."
            />

            <Input
              id="email"
              label="email"
              type="email"
              placeholder="type your email..."
            />

            <Input
              id="password"
              label="password"
              type="password"
              placeholder="type your password..."
            />
          </div>
          <button className="form-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </FormProvider>
    </dialog>
  );
}
