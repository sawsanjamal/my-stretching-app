import { useContext, useState } from "react";
import { AppContext } from "../../App";

export default function EmailAndPassword({ title }) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    data: { user },
  } = useContext(AppContext);
  return (
    <div className="info-section">
      <h1>{title}</h1>
      <div className="input-fields">
        <label>
          Email{" "}
          <div>
            <input type="email" defaultValue={user.email} />
          </div>
        </label>
        <label>
          Password
          <div>
            <input type="password" defaultValue={user.password}></input>
          </div>
        </label>
      </div>
    </div>
  );
}
