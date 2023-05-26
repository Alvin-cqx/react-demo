import React from "react";
// v.18
// import ReactDOM from "react-dom/client";
// v.17
import ReactDOM from "react-dom";
// import './index.css';

import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// // 全局数据传递
// const defaultProvideData = {
//   username: "陈庆贤",
// };
// export const appContext = React.createContext(defaultProvideData);
// root.render(
//   <React.StrictMode>
//     <appContext.Provider value={defaultProvideData}>
//       <App />
//     </appContext.Provider>
//   </React.StrictMode>
// );

import { AppStateProvider } from "./AppState";
// v.18
// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <AppStateProvider>
//       <App />
//     </AppStateProvider>
//   </React.StrictMode>
// );
// v.17
ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
