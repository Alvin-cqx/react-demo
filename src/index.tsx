import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// 全局数据传递
const defaultProvideData = {
  username: "陈庆贤",
};
export const appContext = React.createContext(defaultProvideData);
root.render(
  <React.StrictMode>
    <appContext.Provider value={defaultProvideData}>
      <App />
    </appContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
