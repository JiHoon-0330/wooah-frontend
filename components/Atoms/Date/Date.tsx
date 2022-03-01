import { memo } from "react";
import getFormattedDate from "../../../services/date/format";
import styles from "./Date.module.css";

interface Props {
  date: string;
}

const Date = ({ date }: Props) => {
  const formattedDate = getFormattedDate(date);
  return <div className={styles.date}>{formattedDate}</div>;
};

export default memo(Date);
