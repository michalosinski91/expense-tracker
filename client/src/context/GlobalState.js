import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.js";

// initial state
const initialState = {
  transactions: [
    {
      id: 1,
      text: "Salary",
      amount: 300
    },
    {
      id: 2,
      text: "Book",
      amount: -10
    },
    {
      id: 3,
      text: "Camera",
      amount: -150
    }
  ]
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
