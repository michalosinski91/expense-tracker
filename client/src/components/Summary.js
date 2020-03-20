import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Summary() {
  const { transactions } = useContext(GlobalContext);
  let amounts = transactions.map(transaction => transaction.amount);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="balance__summary">
      <div className="balance__group">
        <h4 className="heading--tertiary">Income</h4>
        <div className="balance__text balance__text--positive">+${income}</div>
      </div>
      <div className="balance__group">
        <h4 className="heading--tertiary">Expense</h4>
        <div className="balance__text balance__text--negative">-${expense}</div>
      </div>
    </div>
  );
}
