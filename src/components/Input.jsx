import { useFormContext } from "react-hook-form";

export const Input = ({ id, type, label, placeholder }) => {
  const { register } = useFormContext();
  return (
    <div className="form-input">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
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
