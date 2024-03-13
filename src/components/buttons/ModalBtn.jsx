import { useContext } from "react";
import "./styles.css";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
export function ModalBtn({
  children,
  handlePaidSubscription,
  handleChangeSubscription,
  subscriptionTier,
}) {
  const {
    data: { user, darkMode },
  } = useContext(AppContext);
  const nav = useNavigate();
  return (
    <>
      {user && user.subscription.tier !== null ? (
        <button
          className={darkMode ? "card-btn-dark" : "card-btn"}
          onClick={() => {
            if (user.subscription.tier === "free") {
              nav(`/checkout/${subscriptionTier}`);
            } else {
              handleChangeSubscription(subscriptionTier);
            }
          }}
        >
          {children}
        </button>
      ) : (
        <button
          onClick={() => {
            handlePaidSubscription(subscriptionTier);
          }}
          className={darkMode ? "card-btn-dark" : "card-btn"}
        >
          {children}
        </button>
      )}
    </>
  );
}
