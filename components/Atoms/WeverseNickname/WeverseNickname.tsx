import { memo } from "react";
import useTwemoji from "../../../hooks/useTwemoji";
import styles from "./WeverseNickname.module.css";

interface Props {
  nickname: string;
}

const WeverseNickname = ({ nickname }: Props) => {
  const ref = useTwemoji(nickname);
  return (
    <span ref={ref} className={styles.nickname}>
      [{nickname}]
    </span>
  );
};

export default memo(WeverseNickname);
