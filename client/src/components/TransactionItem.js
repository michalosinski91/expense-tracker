import React from "react";

export default function TransactionItem({ id, text, amount }) {
  return (
    <li
      className={
        amount > 0
          ? "history__entry history__entry--positive"
          : "history__entry history__entry--negative"
      }
    >
      {text} <span>{amount > 0 ? `+$${amount}` : `-$${Math.abs(amount)}`}</span>
      <button className="history__button">x</button>
    </li>
  );
}
