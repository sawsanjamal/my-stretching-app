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
    methods.reset();
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
          <div>
            <Input
              id="name"
              label="Name"
              type="text"
              placeholder="type your name..."
            />

            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="type your email..."
            />

            <Input
              id="password"
              label="Password"
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
