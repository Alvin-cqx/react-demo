// HOC 高阶组件
import React, { useContext } from "react";
import { setStateContext } from "../AppState";
import { RobotProps } from "./Robot";
export const withAddToCart = (
  ChildComponet: React.ComponentType<RobotProps>
) => {
  // 方式1
  // return class extends React.Component{}
  // 方式2
  return (props) => {
    // console.log(props,'高阶组件')
    const setState = useContext(setStateContext);
    const addToCartFun = (id, name) => {
      if (setState) {
        setState((state) => {
          return {
            ...state,
            shoppingCart: {
              items: [...state.shoppingCart.items, { id, name }],
            },
          };
        });
      }
    };

    return <ChildComponet {...props} addToCart={addToCartFun} />;
  };
};

// 自定义hook
export const useAddToCart = () => {
  const setState = useContext(setStateContext);
  const addToCartFun = (id, name) => {
    if (setState) {
      setState((state) => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }],
          },
        };
      });
    }
  };
  return addToCartFun
};
