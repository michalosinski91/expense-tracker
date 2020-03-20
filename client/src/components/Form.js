import React, { useState } from "react";
import Button from "./Button";

export default function Form() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <form className="form">
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
      <Button />
    </form>
  );
}
