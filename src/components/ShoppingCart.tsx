import React from "react";
import styles from "./ShoppingCart.module.css";
import { appContext } from "../AppState";
interface Props {}
interface State {
  isOpen: boolean;
}

class ShoppingCar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  clickShopCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if ((e.target as HTMLElement).nodeName === "SPAN") {
      this.setState({ isOpen: !this.state.isOpen });
    }
  };
  render() {
    return (
      <appContext.Consumer>
        {(value) => {
          return (
            <div className={styles.cartContainer}>
              <button
                className={styles.button}
                onClick={this.clickShopCart}
                // onClick={() => {
                //   this.setState({ isOpen: !this.state.isOpen });
                // }}
              >
                <span> 购物车({value.shoppingCart.items.length})</span> 
              </button>
              <div
                className={styles.cartDropDown}
                style={{ display: this.state.isOpen ? "block" : "none" }}
              >
                <ul>
                  {value.shoppingCart.items.map((i) => (
                    <li  key={i.id}>{i.name}</li>
                    ))}
                </ul>
              </div>
            </div>
          );
        }}
      </appContext.Consumer>
    );
  }
}

export default ShoppingCar;
