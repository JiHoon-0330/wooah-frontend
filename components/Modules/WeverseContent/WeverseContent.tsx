import { memo } from "react";
import useTranslate from "../../../hooks/useTranslate";
import { getFormattedImages } from "../../../services/images/weverseImages";
import getFormattedMedias from "../../../services/medias/weverseFormatt";
import {
  WeverseAttachedVideos,
  WeverseContentsType,
  WeverseMediaType,
  WeversePhoto,
} from "../../../types/weverse/weverseType";
import Body from "../../Atoms/Body/Body";
import Button from "../../Atoms/Button/Button";
import Date from "../../Atoms/Date/Date";
import Medias from "../../Atoms/Media/Medias";
import NextImages from "../../Atoms/NextImages/NextImages";
import WeverseNickname from "../../Atoms/WeverseNickname/WeverseNickname";
import Youtube from "../../Atoms/Youtube/Youtube";
import styles from "./WeverseContent.module.css";

export interface WeverseContentProps {
  id: number;
  contentsType: WeverseContentsType;
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
  id,
  contentsType,
  profileNickname,
  createdAt,
  body,
  photos,
  attachedVideos,
  type,
  title,
  youtubeId,
}: WeverseContentProps) => {
  const originBody = !!type ? title! : body;
  const { translatedValue, getTranslatedValue } = useTranslate(
    originBody,
    id,
    contentsType,
  );
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
        <Body body={translatedValue} />
        {!type && <Button onClick={getTranslatedValue}>번역</Button>}
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
