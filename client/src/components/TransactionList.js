import React, { useContext, useEffect } from "react";
import TransactionItem from "./TransactionItem";
import Spinner from "./Spinner";
import { GlobalContext } from "../context/GlobalState";

export default function TransactionList() {
  const { transactions, getTransactions, loading } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className="history">
      <h3 className="heading--secondary">History</h3>
      {loading ? (
        <Spinner />
      ) : (
        <ul className="history__list">
          {transactions.map(item => (
            <TransactionItem
              key={item._id}
              id={item._id}
              text={item.text}
              amount={item.amount}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
