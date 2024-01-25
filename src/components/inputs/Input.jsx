import { AnimatePresence } from "framer-motion";
import { useFormContext } from "react-hook-form";
import { findInputError } from "./findInputError";
import { isFormInvalid } from "./isFormInvalid";
import { InputError } from "./InputError";
import "./styles.css";

export const Input = ({ id, type, label, placeholder, validation, name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);
  return (
    <div className="formContent">
      <div className="form-content-header">
        <label className="label" htmlFor={id}>
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div>

      <input
        className="form-input"
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
      />
    </div>
  );
};
