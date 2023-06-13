import { useMemo } from "react";
import getEnNameFromKoName from "../../../services/artist/enNameFromKoName";
import getFormattedDate, {
  getFormattedValue,
} from "../../../services/date/format";
import getFormattedTwitterBody from "../../../services/twitterBody/formattedTwitterBody";
import { TWITTER_API } from "../../../types/twitter/twitterApi";
import Button from "../../Atoms/Button/Button";
import Card from "../../Atoms/Card/Card";
import Date from "../../Atoms/Date/Date";
import Images from "../../Atoms/Images/Images";
import Medias from "../../Atoms/Media/Medias";
import NextImages from "../../Atoms/NextImages/NextImages";
import TwitterBody from "../../Atoms/TwitterBody/TwitterBody";
import TwitterName from "../../Atoms/TwitterName/TwitterName";
import styles from "./TwitterPost.module.css";

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

const buttonStyle = {
  padding: "10rem 0",
};

const sortTextByLength = (list: string[]) => {
  if (!list?.length) return [];
  return [...list]?.sort((a, b) => b.length - a.length);
};

const TwitterPost = ({
  id,
  isRt,
  name,
  screen_name,
  full_text,
  created_at,
  hashtags,
  user_mentions,
  urls,
  media,
  meta,
}: Props) => {
  const enName = getEnNameFromKoName(
    hashtags?.[0] as Parameters<typeof getEnNameFromKoName>[0],
  );

  const formattedBody = getFormattedTwitterBody(
    full_text,
    sortTextByLength(hashtags),
    sortTextByLength(user_mentions),
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

  const download = (url: string, index: number) => {
    const date = getFormattedDate(created_at).split(" ")[0].replace(/\./g, "");

    const a = document.createElement("a");

    a.style.display = "none";
    a.href = url;
    a.download = `${date}-${screen_name}-${id}-${getFormattedValue(index + 1)}`;

    a.click();
    a.remove();
  };

  const onClickSave = () => {
    media?.forEach((item: any, index) => {
      download(
        item?.origin?.replace("https://pbs.twimg.com/", "/twitter-image/") ??
          item?.src?.replace("https://video.twimg.com/", "/twitter-video/"),
        index,
      );
    });
  };

  return (
    <Card artistName={screen_name === "wooah_nv" ? enName! : "default"}>
      <div className={styles.wrapper}>
        <div className={styles.topContainer}>
          <div className={styles.nameContainer}>
            <a
              className={`text__overflow ${styles.name}`}
              href={`https://twitter.com/${screen_name}/status/${id}`}
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
          <NextImages
            images={photoTypeMediaList.map((image) => {
              const { src } = image;
              return {
                ...image,
                src: src.replace("https://pbs.twimg.com/", "/twitter-image/"),
              };
            })}
          />
        )}
        {!!videoTypeMediaList?.length && (
          <Medias
            type="twitter"
            medias={videoTypeMediaList?.map(({ src, poster }) => ({
              src: src.replace("https://video.twimg.com/", "/twitter-video/"),
              poster,
            }))}
          />
        )}
        {(!!photoTypeMediaList?.length || !!videoTypeMediaList?.length) && (
          <Button style={buttonStyle} onClick={onClickSave}>
            저장하기
          </Button>
        )}
        {!!meta?.length && <Images images={meta} />}
      </div>
    </Card>
  );
};

export default TwitterPost;
