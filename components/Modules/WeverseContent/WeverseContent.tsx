import { memo } from "react";
import { WeverseReturn } from "../../../types/weverse/weverseType";
import Body from "../../Atoms/Body/Body";
import Date from "../../Atoms/Date/Date";
import Medias from "../../Atoms/Media/Medias";
import NextImages from "../../Atoms/NextImages/NextImages";
import WeverseNickname from "../../Atoms/WeverseNickname/WeverseNickname";
import styles from "./WeverseContent.module.css";

export const weverseImages = (photos: WeverseReturn["photo"]) => {
  if (!photos?.length) return [];

  return photos.map(({ url, width, height }) => ({
    origin: url,
    src: url,
    width,
    height,
  }));
};

const WeverseContent = (
  props: WeverseReturn | WeverseReturn["comments"][0][0],
) => {
  const originBody = props.body;
  const photos = "photo" in props ? props?.photo : [];
  const vod = "video" in props ? props?.video : "";

  // const { translatedValue, getTranslatedValue } = useTranslate(
  //   originBody,
  //   id,
  //   contentsType,
  // );

  const convertWeverseImageUrl = (url: string) => {
    const result = url.replace(
      "https://weverse-phinf.pstatic.net/",
      "/weverse-image/",
    );

    return result;
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <WeverseNickname nickname={props.author?.profileName} />
          <Date date={+props.createdAt} />
        </div>
        <Body body={originBody} />
        {/* {!type && <Button onClick={getTranslatedValue}>번역</Button>} */}
        {!!photos?.length && (!vod || (vod && 1 < photos?.length)) && (
          <NextImages
            images={photos.map(({ url, width, height }) => ({
              origin: url,
              src: `${convertWeverseImageUrl(url)}?type=w670`,
              width,
              height,
            }))}
          />
        )}
        {vod && (
          <Medias
            type="weverse"
            medias={[{ src: vod, poster: photos?.[0]?.url }]}
          />
        )}
        {/* {youtube && <Youtube youtubeId={youtubeId} />} */}
      </div>
    </>
  );
};

export default memo(WeverseContent);
