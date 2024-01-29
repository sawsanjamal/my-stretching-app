import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../inputs/Input";

import { AnimatePresence } from "framer-motion";
import { InputSuccess } from "../inputs/SuccessInput";
import "./styles.css";
import {
  email_validation,
  first_name_validation,
  last_name_validation,
  password_validation,
} from "../inputs/Validations";
import { createUser } from "../../api/users";

export default function Modal({ openModal, setOpenModal }) {
  const [success, setSuccess] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
    methods.reset();
  }

  const methods = useForm();
  const onSubmit = methods.handleSubmit(async (data) => {
    console.log(data);

    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };
    await createUser(userData);

    setSuccess(true);
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
          <h1> Sign up</h1>
          <div>
            <Input {...first_name_validation} />
            <Input {...last_name_validation} />

            <Input {...email_validation} />

            <Input {...password_validation} />
          </div>
          <div className="form-bottom-section">
            <AnimatePresence mode="wait" initial={false}>
              {success && <InputSuccess />}
            </AnimatePresence>
            <button className="form-submit-btn" onClick={onSubmit}>
              Submit
            </button>
          </div>
        </form>
      </FormProvider>
    </dialog>
  );
}
