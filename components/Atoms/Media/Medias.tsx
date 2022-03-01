import { memo } from "react";

import styles from "./Medias.module.css";

interface Props {
  medias: { src: string; poster: string }[];
}

const Medias = ({ medias }: Props) => {
  if (!medias.length) {
    return null;
  }

  return (
    <>
      {medias.map(({ src, poster }) => (
        <video
          key={src}
          className={styles.media}
          src={src}
          poster={poster}
          controls
          muted
          preload="none"
          playsInline
          loop
        />
      ))}
    </>
  );
};

export default memo(Medias);
