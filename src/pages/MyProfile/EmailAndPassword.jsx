import { useContext } from "react";
import { AppContext } from "../../App";

export default function EmailAndPassword() {
  const {
    data: { user },
  } = useContext(AppContext);
  return (
    <div className="info-section">
      <h1>Email & Password</h1>
      <div className="input-fields-ep">
        <label className="my-profile-label">
          Email{" "}
          <div>
            <input
              className="my-profile-input"
              type="email"
              defaultValue={user.email}
            />
          </div>
        </label>
        <label className="my-profile-label">
          Password
          <div>
            <input
              className="my-profile-input"
              type="password"
              defaultValue={user.password}
            ></input>
          </div>
        </label>
      </div>
    </div>
  );
}
