import React from "react";
import { GlobalProvider } from "./context/GlobalState";

import Header from "./components/Header";
import Balance from "./components/Balance";
import Summary from "./components/Summary";
import TransactionList from "./components/TransactionList";
import AddNewTransaction from "./components/AddNewTransaction";

import "./App.scss";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        <Summary />
        <TransactionList />
        <AddNewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
