import React,{useState} from "react";
import logo from "./assets/images/logo.svg";
// import "./App.css";
// 需要写个声明文件 custom.d.ts
import styles from "./App.module.css";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import ShoppingCar from "./components/ShoppingCart";
// 方法1
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
// 方法2
// interface Props {

// }
// interface State {
//   robatGaleley: any[];
// }
// class App extends React.Component<Props, State> {
//   // 生命周期的第一个阶段，初始化
//   constructor(props) {
//     super(props);
//     this.state = {
//       robatGaleley: [],
//     };
//   }
//   // 在组件创建好dom元素以后，挂载进页面的时候调用
//   componentDidMount(): void {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then(data=>this.setState({robatGaleley:data},()=>{
//         console.log("sada")
//       }));
//   }
//   // 更新阶段，第二个阶段
//   //在组件接收一个新的prop(更新后)时被调用
//   // https://www.cnblogs.com/aoshilin/p/12856642.html
//   // componentWillReceiveProps(nextProps: Readonly<Props>, nextContext: any): void {

//   // }
//   // 这是React组件的钩子函数之一，该函数会在组件重新渲染之前调用，由函数的返回的bool值决定是否重新渲染组件。
//   // shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
//   //   return true
//   // }

//   // 组件更新后调用
//   // componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {

//   // }
//   // 生命周期第三个阶段 销毁
//   // componentWillUnmount(): void {

//   // }
//   render() {
//     return (
//       <div className={styles.app}>
//         <div className={styles.appHeader}>
//           <img src={logo} alt="" className={styles.appLogo} />
//           <h1>alvin-react</h1>
//         </div>
//         <ShoppingCar />
//         <div className={styles.robotList}>
//           {this.state.robatGaleley.map((r) => (
//             <Robot key={r.id} id={r.id} email={r.email} name={r.name} />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// 方法3  hooks useState使用
// interface Props {

// }
// interface State {
//   robatGaleley: any[];
// }
const App: React.FC = (props) => {
  const [count,setCount]=useState<number>(0)
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} alt="" className={styles.appLogo} />
        <h1>alvin-react1S</h1>
      </div>
      <ShoppingCar />
      <button onClick={()=>{
        setCount(count+1)
      }}>click</button>
      <p>count:{count}</p>
      <div className={styles.robotList}>
        {robots.map((r) => (
          <Robot key={r.id} id={r.id} email={r.email} name={r.name} />
        ))}
      </div>
    </div>
  );
};
export default App;
