export default function Subscription({ title }) {
  return (
    <div className="info-section">
      <h1>{title}</h1>
      <div className="input-fields">
        <label>
          Subscription
          <div>
            <div>
              <button> subscription type</button>
            </div>
            <div>
              <button>Active/Inactive</button>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}
