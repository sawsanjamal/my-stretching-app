export function StretchesModal({ closeModal }) {
  return (
    <div className="top-layer-card-container">
      <div className="top-layer-card">
        <button className="close-btn" onClick={closeModal}>
          x
        </button>
        <h1>Create an Account to Continue</h1>
        <div className="cards">
          <div className="individual-card">
            <h1>Free Account</h1>
            <p>$0</p>
            <p> Free with Ads</p>
            <button className="card-btn">Sign Up</button>
            <ul className="list">
              <li>Access to Stretches Detail Pages</li>
              <li>Access to Articles </li>
              <li>No Premium Features</li>
            </ul>
          </div>

          <div className="individual-card">
            <h1>7 Day Trial</h1>
            <p>$0</p>
            <p> 7 Days Free</p>
            <button className="card-btn">Get Started</button>
            <ul className="list">
              <li>Experience 7 Days of Premium</li>
              <li>Advertisement Free Experience</li>
              <li>Access to Stretches</li>
              <li>Access to Articles</li>
            </ul>
          </div>
          <div className="individual-card">
            <h1>One Month</h1>
            <p> $4.99 Per Month</p>
            <p> No Ads</p>
            <button className="card-btn">Get Started</button>
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
