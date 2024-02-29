import { useContext } from "react";
import { AppContext } from "../../App";

import { useNavigate } from "react-router-dom";
import { changeSubscription } from "../../api/users";

export function StretchesModal() {
  const {
    data: { user, darkMode },
    methods: { setUser, setSignUpModalOpen, setSubscription, setModalOpen },
  } = useContext(AppContext);
  const nav = useNavigate();
  function getClass(tier) {
    let className = darkMode ? "individual-card-dark" : "individual-card";
    if (user?.subscription?.tier === tier) {
      className += " disabled-card";
    }
    return className;
  }
  async function handleChangeSubscription(tier) {
    const { user } = await changeSubscription({
      subscription: tier,
    });
    setUser(user);
    setModalOpen(false);
  }
  function handlePaidSubscription(subscriptionTier) {
    if (!user) {
      setSubscription(subscriptionTier);
      setSignUpModalOpen(true);
    }

    if (!user.subscription.tier) {
      nav(`/checkout/${subscriptionTier}`);
    }
  }

  return (
    <div className="top-layer-card-container">
      <div className="top-layer-card">
        {user && user.subscription.tier && (
          <button onClick={() => setModalOpen(false)}>x</button>
        )}
        <h1>
          {user && user.subscription.tier !== null && "Change Subscription"}
          {user &&
            user.subscription.tier === null &&
            "Continue Creating Your Account"}
          {!user && "Create Your Account"}
        </h1>
        <div className="cards">
          <div className={getClass("free")}>
            <h1 className="subscription-title">Free Account</h1>
            <p>$0</p>

            {user && user.subscription.tier !== null ? (
              <button
                className={darkMode ? "card-btn-dark" : "card-btn"}
                onClick={() => {
                  handleChangeSubscription("free");
                }}
              >
                Change to free account
              </button>
            ) : (
              <button
                className={darkMode ? "card-btn-dark" : "card-btn"}
                onClick={() => {
                  setSubscription("free");
                  setSignUpModalOpen(true);
                }}
              >
                Get Started
              </button>
            )}
            <ul className="list">
              <li className="modal-list">Access to Stretches Detail Pages</li>
              <li className="modal-list">Access to Articles </li>
              <li className="modal-list">No Premium Features</li>
            </ul>
          </div>
          <div className={getClass("month")}>
            <h1 className="subscription-title">One Month Premium Account</h1>
            <p>$4.99 Per Month</p>
            {user && user.subscription.tier !== null ? (
              <button
                className={darkMode ? "card-btn-dark" : "card-btn"}
                onClick={() => {
                  handlePaidSubscription("month");
                }}
              >
                Change to one month premium account
              </button>
            ) : (
              <button
                className={darkMode ? "card-btn-dark" : "card-btn"}
                onClick={() => {
                  handlePaidSubscription("month");
                }}
              >
                Get Started
              </button>
            )}

            <ul className="list">
              <li className="modal-list">Experience One Month of Premium</li>
              <li className="modal-list">Advertisement Free Experience</li>
              <li className="modal-list">Access to Stretches</li>
              <li className="modal-list">Access to Articles</li>
            </ul>
          </div>
          <div className={getClass("year")}>
            <h1 className="subscription-title">One Year Premium Account</h1>
            <p> $55.99 Per Year</p>

            {user && user.subscription.tier !== null ? (
              <button
                className={darkMode ? "card-btn-dark" : "card-btn"}
                onClick={() => {
                  handleChangeSubscription("year");
                }}
              >
                Change to one year premium account
              </button>
            ) : (
              <button
                className={darkMode ? "card-btn-dark" : "card-btn"}
                onClick={() => {
                  handlePaidSubscription("year");
                }}
              >
                Get Started
              </button>
            )}
            <ul className="list">
              <li className="modal-list">Experience Year Month of Premium</li>
              <li className="modal-list">Advertisement Free Experience</li>
              <li className="modal-list">Access to Stretches</li>
              <li className="modal-list">Access to Articles</li>
            </ul>
          </div>
        </div>
        <p>Payments Processed by Stripe</p>
      </div>
    </div>
  );
}
