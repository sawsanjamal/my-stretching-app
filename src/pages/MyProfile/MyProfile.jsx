import { useState } from "react";
import "./styles.css";
import PersonalInfo from "./PersonalInfo";
import EmailAndPassword from "./EmailAndPassword";
import Subscription from "./Subscription";

export default function MyProfile() {
  const [title, setTitle] = useState("Personal Information");

  function renderComponent() {
    if (title === "Personal Information") {
      return <PersonalInfo />;
    }
    if (title === "Email And Password") {
      return <EmailAndPassword />;
    }
    if (title === "Subscription") {
      return <Subscription />;
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
