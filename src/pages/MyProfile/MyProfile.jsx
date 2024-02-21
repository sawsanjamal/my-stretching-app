import { useState } from "react";
import "./styles.css";
import PersonalInfo from "./PersonalInfo";
import EmailAndPassword from "./EmailAndPassword";
import Subscription from "./Subscription";

export default function MyProfile() {
  const [title, setTitle] = useState(null);

  function renderComponent() {
    if (title === "Personal Information") {
      return <PersonalInfo title={title} />;
    } else if (title === "Email And Password") {
      return <EmailAndPassword title={title} />;
    } else {
      return <Subscription title={title} />;
    }
  }
  return (
    <div className="my-profile-container">
      <div className="container">
        <div className="profile-management-container">
          User Profile Management
          <div>
            <ul className="profile-ul">
              <li
                className="profile-li"
                onClick={() => setTitle("Personal Information")}
              >
                Personal Info
              </li>
              <li
                className="profile-li"
                onClick={() => setTitle("Email And Password")}
              >
                Email & Password
              </li>
              <li
                className="profile-li"
                onClick={() => setTitle("Subscription")}
              >
                Subscription
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">{renderComponent()}</div>
    </div>
  );
}
