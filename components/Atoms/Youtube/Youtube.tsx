import { Suspense, useEffect, useState } from "react";
import styles from "./Youtube.module.css";

interface Props {
  youtubeId: string;
}

const Youtube = ({ youtubeId }: Props) => {
  return (
    <div className={styles.youtube}>
      <iframe
        id={youtubeId}
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
