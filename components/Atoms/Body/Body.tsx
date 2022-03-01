import { memo } from "react";
import styles from "./Body.module.css";

interface Props {
  body: string;
}

const Body = ({ body }: Props) => {
  return <p className={styles.body}>{body}</p>;
};

export default memo(Body);
