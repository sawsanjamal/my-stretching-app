import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../inputs/Input";
import "./styles.css";
import {
  email_validation,
  first_name_validation,
  last_name_validation,
  password_validation,
} from "../inputs/Validations";
import { createUser, login } from "../../api/users";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUpModal({ openModal, setOpenModal }) {
  const [isSigningUp, setIsSigningUp] = useState(true);
  const nav = useNavigate();

  function onCloseModal() {
    setOpenModal(false);
    methods.reset();
  }

  const methods = useForm();
  const onSubmit = methods.handleSubmit(async (data) => {
    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };
    if (isSigningUp) {
      await createUser(userData);
      nav("/success");
    } else {
      await login(userData);
      nav("/successlogin");
    }
    onCloseModal();
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
          <h1>{isSigningUp ? "Sign Up" : "Log In"}</h1>
          <div>
            {isSigningUp && (
              <>
                <Input {...first_name_validation} />
                <Input {...last_name_validation} />
              </>
            )}

            <Input {...email_validation} />

            <Input {...password_validation} />
          </div>
          <div className="form-bottom-section">
            <button className="form-submit-btn" onClick={onSubmit}>
              Submit
            </button>
            <button
              className="form-option-btn"
              onClick={() => setIsSigningUp(!isSigningUp)}
            >
              {isSigningUp ? "or login" : "or sign up"}
            </button>
          </div>
        </form>
      </FormProvider>
    </dialog>
  );
}
