import React, { useState } from "react";
interface AppStateValue {
  username: string;
  shoppingCart: { items: { id: number; name: string }[] };
}
// 全局数据传递
const defaultProvideData: AppStateValue = {
  username: "陈庆贤",
  shoppingCart: { items: [] },
};
export const appContext = React.createContext(defaultProvideData);
export const setStateContext = React.createContext<
  React.Dispatch<React.SetStateAction<AppStateValue>> | undefined
>(undefined);
export const AppStateProvider: React.FC = (props) => {
  const [state, setState] = useState(defaultProvideData);
  return (
    <appContext.Provider value={state}>
      <setStateContext.Provider value={setState}>
        {props.children}
      </setStateContext.Provider>
    </appContext.Provider>
  );
};
