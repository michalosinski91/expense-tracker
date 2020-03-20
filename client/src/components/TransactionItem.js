import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function TransactionItem({ id, text, amount }) {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li
      className={
        amount > 0
          ? "history__entry history__entry--positive"
          : "history__entry history__entry--negative"
      }
    >
      {text} <span>{amount > 0 ? `+$${amount}` : `-$${Math.abs(amount)}`}</span>
      <button onClick={() => deleteTransaction(id)} className="history__button">
        x
      </button>
    </li>
  );
}
