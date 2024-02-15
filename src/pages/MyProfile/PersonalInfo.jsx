import { useContext, useState } from "react";
import { AppContext } from "../../App";

import { ImageCrop } from "./ImageCrop";

export default function PersonalInfo({ title }) {
  const [base64, setBase64] = useState(undefined);
  const {
    data: { user },
  } = useContext(AppContext);
  return (
    <div className="info-section">
      <h1>{title}</h1>
      <div className="pic">
        {/* {user.profilePicture && (
          <div className="pic-container">
            <img className="cropper-view-box" src={user.profilePicture} />
          </div>
        )} */}
        <ImageCrop base64={base64} setBase64={setBase64} />
      </div>
      <div className="input-fields"></div>
      <label>
        First Name{" "}
        <div>
          <input name="firstname" defaultValue={user.firstName} />
        </div>
      </label>
      <label>
        Last Name{" "}
        <div>
          <input name="lastname" defaultValue={user.lastName} />
        </div>
      </label>
      <label>
        Email{" "}
        <div>
          <input name="email" defaultValue={user.email} />
        </div>
      </label>
    </div>
  );
}
