import { memo } from "react";
import { getFormattedImages } from "../../../services/images/weverseImages";
import getFormattedMedias from "../../../services/medias/weverseFormatt";
import { ArtistNameType } from "../../../types/artist";
import {
  WeverseAttachedVideos,
  WeverseGradeType,
  WeverseMediaType,
  WeversePhoto,
} from "../../../types/weverse/weverseType";
import Body from "../../Atoms/Body/Body";
import Date from "../../Atoms/Date/Date";
import Medias from "../../Atoms/Media/Medias";
import NextImages from "../../Atoms/NextImages/NextImages";
import WeverseNickname from "../../Atoms/WeverseNickname/WeverseNickname";
import Youtube from "../../Atoms/Youtube/Youtube";
import styles from "./WeverseContent.module.css";

export interface WeverseContentProps {
  profileNickname: string;
  createdAt: string;
  body: string;
  photos?: WeversePhoto[];
  attachedVideos?: WeverseAttachedVideos[];
  type?: WeverseMediaType;
  title?: string;
  youtubeId?: string;
}

const WeverseContent = ({
  profileNickname,
  createdAt,
  body,
  photos,
  attachedVideos,
  type,
  title,
  youtubeId,
}: WeverseContentProps) => {
  const formattedImages = getFormattedImages(photos);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <WeverseNickname
            nickname={!!type ? "위버스 미디어" : profileNickname}
          />
          <Date date={createdAt} />
        </div>
        <Body body={!!type ? title! : body} />
        {formattedImages && <NextImages images={formattedImages} />}
        {attachedVideos && (
          <Medias medias={getFormattedMedias(attachedVideos)} />
        )}
        {type === "VIDEO" && youtubeId && <Youtube youtubeId={youtubeId} />}
      </div>
    </>
  );
};

export default memo(WeverseContent);
