import React, { useContext } from "react";
import TransactionItem from "./TransactionItem";
import { GlobalContext } from "../context/GlobalState";

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="history">
      <h3 className="heading--secondary">History</h3>
      <ul className="history__list">
        {transactions.map(item => (
          <TransactionItem
            key={item.id}
            id={item.id}
            text={item.text}
            amount={item.amount}
          />
        ))}
      </ul>
    </div>
  );
}
