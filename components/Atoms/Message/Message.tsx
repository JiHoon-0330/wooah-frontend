import { memo } from "react";
import styles from "./Message.module.css";

interface Props {
  message: string;
  type: "error" | "warn";
}

const Message = ({ message, type = "warn" }: Props) => {
  return <p className={`${styles[type]} ${styles.message}`}>{message}</p>;
};

export default memo(Message);
