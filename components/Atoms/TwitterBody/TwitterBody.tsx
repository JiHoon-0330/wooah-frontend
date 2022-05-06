import useTwemoji from "../../../hooks/useTwemoji";
import styles from "./TwitterBody.module.css";

interface Props {
  body: string;
}

const TwitterBody = ({ body }: Props) => {
  const ref = useTwemoji(body);

  return (
    <div
      ref={ref}
      className={styles.body}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
};

export default TwitterBody;
