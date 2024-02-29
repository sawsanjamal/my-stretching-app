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

import { useContext, useState } from "react";
import { AppContext } from "../../App";
import Dropdown from "./Dropdown";
import { SUBSCRIPTION_TIERS } from "../../constants";
import { useNavigate } from "react-router-dom";

export default function SignUpModal() {
  const {
    data: { signUpModalOpen, darkMode, subscription },
    methods: { setUser, setSignUpModalOpen, setModalOpen, setOpenDropdown },
  } = useContext(AppContext);
  const nav = useNavigate();
  const [isSigningUp, setIsSigningUp] = useState(true);

  function onCloseModal() {
    setSignUpModalOpen(false);
    setModalOpen(false);
    methods.reset();
  }

  const methods = useForm({
    defaultValues: { email: "myname@gmail.com", password: "testing123" },
  });
  const onSubmit = methods.handleSubmit(async (data) => {
    setOpenDropdown(false);
    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };

    if (isSigningUp && data.subscription !== "free") {
      const response = await createUser(userData);
      setUser(response.data.newUser);
      setSignUpModalOpen(false);
      nav(`/checkout/${data.subscription}`);
    } else {
      const { user } = await login(userData);
      setUser(user);
      onCloseModal();
    }
  });

  return (
    <dialog className="dialog" open={signUpModalOpen}>
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          noValidate
          autoComplete="off"
          className={darkMode ? "showForm-dark" : "showForm"}
          method="dialog"
        >
          <div className="btn-container">
            <button
              className={darkMode ? "form-close-btn-dark" : "form-close-btn"}
              onClick={onCloseModal}
            >
              x
            </button>
          </div>
          <h1>{isSigningUp ? "Sign Up" : "Log In"}</h1>
          <h3>
            {isSigningUp
              ? `Create Your ${SUBSCRIPTION_TIERS[subscription]}`
              : "Login To Your Account"}
          </h3>
          <div className="form-content">
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

              <Dropdown />
            </div>
          </div>
        </form>
      </FormProvider>
    </dialog>
  );
}
