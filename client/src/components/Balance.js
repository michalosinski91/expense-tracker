import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  let amounts = transactions.map(transaction => transaction.amount);
  let balance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
      <h4 className="heading--tertiary">Your balance</h4>
      <p className="balance__amount">${numberWithCommas(balance)}</p>
    </div>
  );
}
