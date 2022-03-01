import { memo } from "react";
import styles from "./WeverseNickname.module.css";

interface Props {
  nickname: string;
}

const WeverseNickname = ({ nickname }: Props) => {
  return <span className={styles.nickname}>[{nickname}]</span>;
};

export default memo(WeverseNickname);
