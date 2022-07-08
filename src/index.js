import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { v4 as uuidv4 } from "uuid";

const intialTask = [
  {
    id: 1,
    title: "Backlog",
    cards: [
      { name: "Go to Gym", stage: 0, cid: uuidv4() },
      { name: "No Junk Food", stage: 0, cid: uuidv4() },
    ],
  },
  {
    id: 2,
    title: "Todo",
    cards: [],
  },
  {
    id: 3,
    title: "InProgress",
    cards: [],
  },
  {
    id: 4,
    title: "Done",
    cards: [],
  },
];

export const todo = React.createContext();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <todo.Provider value={intialTask}>
    <App />
  </todo.Provider>
);


reportWebVitals();
