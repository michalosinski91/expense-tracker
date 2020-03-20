import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Form() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount: +amount
    };

    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__group">
        <label htmlFor="text" className="form__label">
          Text
        </label>
        <input
          type="text"
          value={text}
          onChange={({ target }) => setText(target.value)}
          className="form__input"
          placeholder="Enter text..."
        />
      </div>
      <div className="form__group">
        <label htmlFor="amount" className="form__label">
          Amount <br />
          (negative - expense, positive - income)
        </label>
        <input
          type="number"
          value={amount}
          onChange={({ target }) => setAmount(target.value)}
          className="form__input"
          placeholder="Enter amount..."
        />
      </div>
      <button type="submit" className="btn">
        Add transaction
      </button>
    </form>
  );
}
