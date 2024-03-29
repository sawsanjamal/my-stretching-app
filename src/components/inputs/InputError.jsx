import { MdError } from "react-icons/md";
import { motion } from "framer-motion";
export function InputError({ message }) {
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
