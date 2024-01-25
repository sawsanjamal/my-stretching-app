import { motion } from "framer-motion";
export function InputSuccess() {
  return (
    <motion.p className="success-message" {...framer_success}>
      {"Form has been submitted successfully!"}
    </motion.p>
  );
}
const framer_success = {
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};
