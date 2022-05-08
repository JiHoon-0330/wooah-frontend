import { memo, useEffect, useRef } from "react";
import useVolume from "../../../hooks/useVolume";
import styles from "./Medias.module.css";

export type VideoType = "weverse" | "twitter" | "reels";

interface Props {
  type: VideoType;
  medias: { src: string; poster: string }[];
}

const Medias = ({ type, medias }: Props) => {
  const ref = useRef<HTMLVideoElement>(null);
  const { volume, onVolumeChange } = useVolume(type);

  useEffect(() => {
    if (!window || !ref.current || volume === undefined) return;
    ref.current.volume = volume;
  }, [ref.current, volume]);

  if (!medias.length) return null;

  return (
    <>
      {medias.map(({ src, poster }) => (
        <video
          ref={ref}
          key={src}
          className={styles.media}
          src={src}
          poster={poster}
          onVolumeChange={onVolumeChange}
          preload="none"
          controls
          playsInline
          loop
        />
      ))}
    </>
  );
};

export default memo(Medias);
