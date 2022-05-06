import { memo } from "react";
import styles from "./Body.module.css";
import useTwemoji from "../../../hooks/useTwemoji";

interface Props {
  body: string;
}

const Body = ({ body }: Props) => {
  const ref = useTwemoji(body);

  return (
    <p ref={ref} className={styles.body}>
      {body}
    </p>
  );
};

export default memo(Body);
