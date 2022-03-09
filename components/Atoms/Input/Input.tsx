import { DetailedHTMLProps, InputHTMLAttributes, memo } from "react";
import styles from "./Input.module.css";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input = ({ ...props }: Props) => {
  return <input className={styles.input} {...props} />;
};

export default memo(Input);
