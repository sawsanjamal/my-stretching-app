import { useContext } from "react";
import { AppContext } from "../../App";

import { useNavigate } from "react-router-dom";
import { changeSubscription } from "../../api/users";
import { ModalBtn } from "../buttons/ModalBtn";

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
        <h1 className="account-subscription-title">
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
              <ModalBtn
                handleChangeSubscription={handleChangeSubscription}
                subscriptionTier="free"
              >
                Change to free account
              </ModalBtn>
            ) : (
              <ModalBtn
                handlePaidSubscription={handlePaidSubscription}
                subscriptionTier="free"
              >
                Get Started
              </ModalBtn>
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
              <ModalBtn
                handleChangeSubscription={handleChangeSubscription}
                subscriptionTier="month"
              >
                Change to one month premium account
              </ModalBtn>
            ) : (
              <ModalBtn
                handlePaidSubscription={handlePaidSubscription}
                subscriptionTier="month"
              >
                Get Started
              </ModalBtn>
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
              <ModalBtn
                handleChangeSubscription={handleChangeSubscription}
                subscriptionTier="year"
              >
                Change to one year premium account
              </ModalBtn>
            ) : (
              <ModalBtn
                handlePaidSubscription={handlePaidSubscription}
                subscriptionTier="year"
              >
                Get Started
              </ModalBtn>
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
