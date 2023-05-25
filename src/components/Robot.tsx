import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { appContext } from "..";
interface RobotProps {
  id: number;
  name: string;
  email: string;
}
const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext);
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="" />
      <h2>{name}</h2>
      <p>{email}</p>
      <h3>作者:{value.username}</h3>
    </div>
  );
};

export default Robot;
