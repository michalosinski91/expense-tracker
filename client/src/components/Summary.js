import React from "react";

export default function Summary() {
  return (
    <div className="balance__summary">
      <div className="balance__group">
        <h4 className="heading--tertiary">Income</h4>
        <div className="balance__text balance__text--positive">+$0.00</div>
      </div>
      <div className="balance__group">
        <h4 className="heading--tertiary">Expense</h4>
        <div className="balance__text balance__text--negative">-$0.00</div>
      </div>
    </div>
  );
}
