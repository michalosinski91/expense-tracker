import React from "react";

import Header from "./components/Header";
import Balance from "./components/Balance";
import Summary from "./components/Summary";
import TransactionList from "./components/TransactionList";
import AddNewTransaction from "./components/AddNewTransaction";

import "./App.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <Balance />
      <Summary />
      <TransactionList />
      <AddNewTransaction />
    </div>
  );
}

export default App;
