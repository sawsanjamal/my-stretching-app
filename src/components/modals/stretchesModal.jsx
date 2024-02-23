import { useContext } from "react";
import { AppContext } from "../../App";
import { changeSubscription } from "../../api/users";

export function StretchesModal() {
  const {
    data: { user, darkMode },
    methods: { setUser, setSignUpModalOpen, setSubscription, setModalOpen },
  } = useContext(AppContext);

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

  return (
    <div className="top-layer-card-container">
      <div className="top-layer-card">
        {user && <button onClick={() => setModalOpen(false)}>x</button>}
        <h1>
          {user ? "Change Subscription" : "Create an Account to Continue"}
        </h1>
        <div className="cards">
          <div className={getClass("free")}>
            <h1>Free Account</h1>
            <p>$0</p>

            {user ? (
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
            <h1>One Month Premium Account</h1>
            <p>$4.99 Per Month</p>
            {user ? (
              <button
                className={darkMode ? "card-btn-dark" : "card-btn"}
                onClick={() => {
                  handleChangeSubscription("month");
                }}
              >
                Change to one month premium account
              </button>
            ) : (
              <button
                className={darkMode ? "card-btn-dark" : "card-btn"}
                onClick={() => {
                  setSubscription("month");
                  setSignUpModalOpen(true);
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
            <h1>One Year Premium Account</h1>
            <p> $55.99 Per Year</p>

            {user ? (
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
                  setSubscription("year");
                  setSignUpModalOpen(true);
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
