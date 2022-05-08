import getFormattedTwitterBody from "../../../services/twitterBody/formattedTwitterBody";
import Card from "../../Atoms/Card/Card";
import Date from "../../Atoms/Date/Date";
import Medias from "../../Atoms/Media/Medias";
import NextImages from "../../Atoms/NextImages/NextImages";
import TwitterBody from "../../Atoms/TwitterBody/TwitterBody";
import TwitterName from "../../Atoms/TwitterName/TwitterName";
import getEnNameFromKoName from "../../../services/artist/enNameFromKoName";
import Images from "../../Atoms/Images/Images";
import { TWITTER_API } from "../../../types/twitter/twitterApi";
import styles from "./TwitterPost.module.css";
import { useMemo } from "react";

type Props = TWITTER_API["GET TWITTER_POST /twitter"]["return"]["data"][0];
type MediaVideoType = {
  type: "video";
  url: string;
  src: string;
  poster: string;
};
type MediaPhotoType = {
  src: string;
  origin: string;
  width: number;
  height: number;
  type: "photo";
  url: string;
};
const TwitterPost = ({
  sortIndex,
  isRt,
  name,
  screen_name,
  full_text,
  created_at,
  hashtags,
  urls,
  media,
  meta,
}: Props) => {
  const enName = getEnNameFromKoName(
    hashtags?.[0] as Parameters<typeof getEnNameFromKoName>[0],
  );
  const formattedBody = getFormattedTwitterBody(
    full_text,
    [...hashtags]?.sort((a, b) => b.length - a.length),
    urls,
    media?.[0]?.url,
  );

  const [videoTypeMediaList, photoTypeMediaList] = useMemo(() => {
    if (!media?.length) return [];
    const videoTypeMediaList = media.filter(
      (item: MediaVideoType | MediaPhotoType): item is MediaVideoType => {
        return item.type === "video";
      },
    );
    const photoTypeMediaList = media.filter(
      (item: MediaVideoType | MediaPhotoType): item is MediaPhotoType => {
        return item.type === "photo";
      },
    );
    return [videoTypeMediaList, photoTypeMediaList];
  }, [media]);

  return (
    <Card artistName={enName!}>
      <div className={styles.wrapper}>
        <div className={styles.topContainer}>
          <div className={styles.nameContainer}>
            <a
              className={`text__overflow ${styles.name}`}
              href={`https://twitter.com/${screen_name}/status/${sortIndex}`}
              target="_blank"
            >
              <TwitterName id={name} type="name" isRt={isRt} />
            </a>
            <Date date={created_at} />
          </div>
          <TwitterName id={screen_name} type="screen_name" />
        </div>
        <TwitterBody body={formattedBody} />
        {!!photoTypeMediaList?.length && (
          <NextImages images={photoTypeMediaList} />
        )}
        {!!videoTypeMediaList?.length && (
          <Medias type="twitter" medias={videoTypeMediaList} />
        )}
        {!!meta?.length && <Images images={meta} />}
      </div>
    </Card>
  );
};

export default TwitterPost;
