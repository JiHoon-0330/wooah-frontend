import { memo } from "react";
import getBackgroundColorClass from "../../../services/style/backgroundColor";
import { ArtistNameType } from "../../../types/artist";
import styles from "./Card.module.css";

interface Props {
  artistName: ArtistNameType | "MEDIA";
  children: JSX.Element | JSX.Element[];
}

const Card = ({ artistName, children }: Props) => {
  const backgroundColorClass = getBackgroundColorClass(artistName);

  return (
    <div
      className={`${backgroundColorClass} ${styles.card} ${styles[artistName]}`}
    >
      {children}
    </div>
  );
};

export default memo(Card);
