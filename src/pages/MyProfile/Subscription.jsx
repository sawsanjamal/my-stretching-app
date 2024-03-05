import { useContext } from "react";
import { AppContext } from "../../App";

export default function Subscription() {
  const {
    data: { user, modalOpen },
    methods: { setModalOpen },
  } = useContext(AppContext);

  return (
    <div className="info-section">
      <h1>Subscription</h1>
      <div className="input-fields">
        <div className="subscription-tier">
          <h3>Subscription Tier</h3>
          <button className="subscription-btn">
            {user?.subscription?.tier}
          </button>
        </div>
        <div className="subscription-tier">
          <h3> Subscription Status</h3>
          <button className="subscription-btn-active">
            {`Active${
              user?.subscription?.expiration
                ? " until " +
                  new Date(user.subscription.expiration).toLocaleString()
                : ""
            }`}
          </button>
        </div>
        <button
          className="change-subscription-btn"
          onClick={() => setModalOpen(!modalOpen)}
        >
          Change Subscription
        </button>
      </div>
    </div>
  );
}
