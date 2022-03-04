import { memo } from "react";
import getFormattedDate from "../../../services/date/format";
import styles from "./Date.module.css";

interface Props {
  date: string;
}

const Date = ({ date }: Props) => {
  const formattedDate = getFormattedDate(date);
  return <span className={styles.date}>{formattedDate} </span>;
};

export default memo(Date);
