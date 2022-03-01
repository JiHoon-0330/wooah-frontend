import styles from "./Youtube.module.css";

interface Props {
  youtubeId: string;
}

const Youtube = ({ youtubeId }: Props) => {
  if (!youtubeId) {
    return null;
  }

  return (
    <div className={styles.youtube}>
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder="0"
        width="560"
        height="315"
        allowFullScreen
      />
    </div>
  );
};

export default Youtube;
