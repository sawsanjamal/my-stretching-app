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
import { useContext, useState } from "react";
import { AppContext } from "../../App";

export default function SignUpModal() {
  const {
    data: { signUpModalOpen, darkMode, openDropdown },
    methods: { setUser, setSignUpModalOpen, setModalOpen, setOpenDropdown },
  } = useContext(AppContext);

  const [isSigningUp, setIsSigningUp] = useState(true);
  const nav = useNavigate();

  function onCloseModal() {
    setSignUpModalOpen(false);
    setModalOpen(false);
    methods.reset();
  }

  const methods = useForm({
    defaultValues: { email: "testerfive@gmail.com", password: "testing123" },
  });
  const onSubmit = methods.handleSubmit(async (data) => {
    setOpenDropdown(false);
    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };
    if (isSigningUp) {
      await createUser(userData);

      nav("/checkout");
    } else {
      const { user } = await login(userData);
      setUser(user);
      nav("/successlogin");
    }
    onCloseModal();
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
          <div>
            <button
              className={darkMode ? "form-close-btn-dark" : "form-close-btn"}
              onClick={onCloseModal}
            >
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
