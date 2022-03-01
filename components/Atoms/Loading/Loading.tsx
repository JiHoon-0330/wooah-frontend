import { memo } from "react";
import styles from "./Loading.module.css";

interface Props {
  repeat?: number;
}

const Loading = ({ repeat = 7 }: Props) => {
  return (
    <div className={styles.wrapper}>
      {[...new Array(repeat)].map((_, index) => {
        return (
          <div key={index} className={styles.loading}>
            <div />
            <div />
          </div>
        );
      })}
    </div>
  );
};

export default memo(Loading);
