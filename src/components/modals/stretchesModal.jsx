import { useContext } from "react";
import { AppContext } from "../../App";

export function StretchesModal() {
  const {
    data: { darkMode },
    methods: { setSignUpModalOpen },
  } = useContext(AppContext);
  return (
    <div className="top-layer-card-container">
      <div className="top-layer-card">
        <h1>Create an Account to Continue</h1>
        <div className="cards">
          <div
            className={darkMode ? "individual-card-dark" : "individual-card"}
          >
            <h1>Free Account</h1>
            <p>$0</p>
            <p> Free with Ads</p>
            <button
              className={darkMode ? "card-btn-dark" : "card-btn"}
              onClick={setSignUpModalOpen}
            >
              Sign Up
            </button>
            <ul className="list">
              <li>Access to Stretches Detail Pages</li>
              <li>Access to Articles </li>
              <li>No Premium Features</li>
            </ul>
          </div>
          <div
            className={darkMode ? "individual-card-dark" : "individual-card"}
          >
            <h1>7 Day Trial</h1>
            <p>$0</p>
            <p> 7 Days Free</p>
            <button
              className={darkMode ? "card-btn-dark" : "card-btn"}
              onClick={setSignUpModalOpen}
            >
              Get Started
            </button>
            <ul className="list">
              <li>Experience 7 Days of Premium</li>
              <li>Advertisement Free Experience</li>
              <li>Access to Stretches</li>
              <li>Access to Articles</li>
            </ul>
          </div>
          <div
            className={darkMode ? "individual-card-dark" : "individual-card"}
          >
            <h1>One Month</h1>
            <p> $4.99 Per Month</p>
            <p> No Ads</p>
            <button
              className={darkMode ? "card-btn-dark" : "card-btn"}
              onClick={setSignUpModalOpen}
            >
              Get Started
            </button>
            <ul className="list">
              <li>Unlimited Stretching Plans</li>
              <li>Advertisement Free Experience</li>
              <li>Access to Stretches</li>
              <li>Access to Articles</li>
            </ul>
          </div>
        </div>
        <p>Payments Processed by Stripe</p>
      </div>
    </div>
  );
}
