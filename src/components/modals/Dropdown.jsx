import { useContext } from "react";
import "./styles.css";
import { AppContext } from "../../App";
import { useFormContext } from "react-hook-form";
import { SUBSCRIPTION_TIERS } from "../../constants";

export default function Dropdown() {
  const {
    data: { subscription },
    methods: { setSubscription, setSelectedSubscription },
  } = useContext(AppContext);
  const { register } = useFormContext();

  return (
    <select
      {...register("subscription")}
      className="dropdown"
      value={subscription}
      onChange={(e) => {
        setSubscription(e.target.value);
        setSelectedSubscription(e.target.value);
      }}
    >
      {Object.entries(SUBSCRIPTION_TIERS).map(([subscription, displayName]) => (
        <option key={subscription} value={subscription} className="menu-items">
          {displayName}
        </option>
      ))}
      ;
    </select>
  );
}
