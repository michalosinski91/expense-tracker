import React from "react";
import Button from "./Button";

export default function Form() {
  return (
    <form className="form">
      <div className="form__group">
        <label htmlFor="text" className="form__label">
          Text
        </label>
        <input
          type="text"
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
          className="form__input"
          placeholder="Enter amount..."
        />
      </div>
      <Button />
    </form>
  );
}
