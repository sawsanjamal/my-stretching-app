import { AnimatePresence } from "framer-motion";
import { useFormContext } from "react-hook-form";
import { findInputError } from "../findInputError";
import { motion } from "framer-motion";
import { isFormInvalid } from "../isFormInvalid";
import { MdError } from "react-icons/md";

export const Input = ({ id, type, label, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, label);
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
        {...register(label, {
          required: {
            value: true,
            message: "required",
          },
        })}
      />
    </div>
  );
};

function InputError({ message }) {
  return (
    <motion.p className="input-error-message" {...framer_error}>
      <MdError />
      {message}
    </motion.p>
  );
}
const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
