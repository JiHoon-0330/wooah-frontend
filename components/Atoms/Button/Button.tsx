import { ButtonHTMLAttributes, DetailedHTMLProps, memo } from "react";
import styles from "./Button.module.css";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: string;
}

const Button = ({ children, ...props }: Props) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default memo(Button);
