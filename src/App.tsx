import React from "react";
import logo from "./assets/images/logo.svg";
// import "./App.css";
// 需要写个声明文件 custom.d.ts
import styles from "./App.module.css";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import ShoppingCar from "./components/ShoppingCart";
console.log(robots, styles.robotList, logo);
// function App() {
//   return (
//     <div className={styles.app}>
//       <div className={styles.appHeader}>
//         <img src={logo} alt="" className={styles.appLogo} />
//         <h1>alvin-react</h1>
//       </div>
//       <ShoppingCar  />
//       <div className={styles.robotList}>
//         {robots.map((r) => (
//           <Robot key={r.id} id={r.id} email={r.email} name={r.name} />
//         ))}
//       </div>
//     </div>
//   );
// }
interface Props {}
interface State {
  robatGaleley: any[];
}
class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      robatGaleley: [],
    };
  }
  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(data=>this.setState({robatGaleley:data}));
  }
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} alt="" className={styles.appLogo} />
          <h1>alvin-react</h1>
        </div>
        <ShoppingCar />
        <div className={styles.robotList}>
          {this.state.robatGaleley.map((r) => (
            <Robot key={r.id} id={r.id} email={r.email} name={r.name} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
