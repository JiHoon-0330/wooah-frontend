import { useEffect, useState } from "react";
import styles from "./Youtube.module.css";

interface Props {
  youtubeId: string;
}

const Youtube = ({ youtubeId }: Props) => {
  const [id, setId] = useState<string>();

  useEffect(() => {
    setId(youtubeId);
  }, [youtubeId]);

  if (!id) return null;

  return (
    <div className={styles.youtube}>
      <iframe
        id={id}
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        width="560"
        height="315"
        allowFullScreen
      />
    </div>
  );
};

export default Youtube;
