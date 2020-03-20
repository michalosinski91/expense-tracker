import React from "react";

export default function TransactionItem() {
  return (
    <li className="history__entry history__entry--positive">
      Cash <span>+$300</span> <button className="history__button">x</button>
    </li>
  );
}
