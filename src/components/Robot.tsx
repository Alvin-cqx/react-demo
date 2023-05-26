import React, { useContext } from "react";
import styles from "./Robot.module.css";
// import { appContext } from "..";
// const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
//   const value = useContext(appContext);
//   return (
//     <div className={styles.cardContainer}>
//       <img src={`https://robohash.org/${id}`} alt="" />
//       <h2>{name}</h2>
//       <p>{email}</p>
//       <h3>作者:{value.username}</h3>
//     </div>
//   );
// };
import { appContext ,setStateContext} from "../AppState";
interface RobotProps {
  id: number;
  name: string;
  email: string;
}
const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext);
  const setState=useContext(setStateContext)
  const addToCart=()=>{
    if(setState){
      setState(state1=>{
        console.log(state1)
        return {
          ...state1
        }
      })
    }
  }
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="" />
      <h2>{name}</h2>
      <p>{email}</p>
      <h3>作者:{value.username}</h3>
      <button onClick={addToCart}>加入购物车</button>
    </div>
  );
};

export default Robot;
