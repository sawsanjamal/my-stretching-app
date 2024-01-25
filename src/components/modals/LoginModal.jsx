import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../inputs/Input";
import { email_validation, password_validation } from "../inputs/Validations";
import "./styles.css";

export default function Modal({ openModal, setOpenModal }) {
  function onCloseModal() {
    setOpenModal(false);
    methods.reset();
  }
  const methods = useForm();
  const onSubmit = methods.handleSubmit(() => {
    methods.reset();
  });

  return (
    <dialog className="dialog" open={openModal}>
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          noValidate
          autoComplete="off"
          className="showForm"
          method="dialog"
        >
          <div>
            <button className="form-close-btn" onClick={onCloseModal}>
              x
            </button>
          </div>
          <h1> Login</h1>
          <div>
            <Input {...email_validation} />

            <Input {...password_validation} />
          </div>
          <div className="form-bottom-section">
            <button className="form-submit-btn" onClick={onSubmit}>
              Login
            </button>
          </div>
        </form>
      </FormProvider>
    </dialog>
  );
}
