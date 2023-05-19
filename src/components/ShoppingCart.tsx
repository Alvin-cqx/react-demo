import React from "react";
import styles from "./ShoppingCart.module.css";
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
      <div className={styles.cartContainer}>
        <button
          className={styles.button}
          onClick={this.clickShopCart}
          // onClick={() => {
          //   this.setState({ isOpen: !this.state.isOpen });
          // }}
        >
         <span> 购物车(2)</span>
        </button>
        <div
          className={styles.cartDropDown}
          style={{ display: this.state.isOpen ? "block" : "none" }}
        >
          <ul>
            <li>机器人1</li>
            <li>机器人2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoppingCar;
