import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../inputs/Input";
import { AnimatePresence } from "framer-motion";
import { InputSuccess } from "../inputs/SuccessInput";
import "./styles.css";
import {
  email_validation,
  name_validation,
  password_validation,
} from "../inputs/Validations";

export default function Modal({ openModal, setOpenModal }) {
  const [success, setSuccess] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
    methods.reset();
  }
  const methods = useForm();
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);
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
            <Input {...name_validation} />

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
