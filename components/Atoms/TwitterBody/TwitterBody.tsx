import styles from "./TwitterBody.module.css";

interface Props {
  body: string;
}

const TwitterBody = ({ body }: Props) => {
  return (
    <div className={styles.body} dangerouslySetInnerHTML={{ __html: body }} />
  );
};

export default TwitterBody;
