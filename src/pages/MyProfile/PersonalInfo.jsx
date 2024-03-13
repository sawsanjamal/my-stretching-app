import { useContext, useState } from "react";
import { AppContext } from "../../App";

import { ImageCrop } from "./ImageCrop";

export default function PersonalInfo() {
  const [base64, setBase64] = useState();
  const {
    data: { user },
  } = useContext(AppContext);
  return (
    <div className="info-section">
      <h1>Personal Information</h1>
      <div className="pic">
        <ImageCrop base64={base64} setBase64={setBase64} />
      </div>
      <div className="input-fields"></div>
      <label className="my-profile-label">
        First Name{" "}
        <div>
          <input
            className="my-profile-input"
            name="firstname"
            defaultValue={user.firstName}
          />
        </div>
      </label>
      <label className="my-profile-label">
        Last Name{" "}
        <div>
          <input
            className="my-profile-input"
            name="lastname"
            defaultValue={user.lastName}
          />
        </div>
      </label>
      <label className="my-profile-label">
        Email{" "}
        <div>
          <input
            className="my-profile-input"
            name="email"
            defaultValue={user.email}
          />
        </div>
      </label>
    </div>
  );
}
