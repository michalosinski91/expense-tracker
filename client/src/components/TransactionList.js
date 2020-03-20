import React from "react";
import TransactionItem from "./TransactionItem";

export default function TransactionList() {
  return (
    <div className="history">
      <h3 className="heading--secondary">History</h3>
      <ul className="history__list">
        <TransactionItem />
      </ul>
    </div>
  );
}
