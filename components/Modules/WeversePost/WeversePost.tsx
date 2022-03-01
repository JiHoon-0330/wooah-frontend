import { memo, useEffect, useState } from "react";
import getArtistNameByWeverseId from "../../../services/artist/artistName";
import { ArtistNameType } from "../../../types/artist";
import {
  WeverseArtistId,
  WeverseAttachedVideos,
  WeversePhoto,
} from "../../../types/weverse/weverseType";
import Card from "../../Atoms/Card/Card";
import WeverseComments, {
  WeverseCommentsProps,
} from "../WeverseComments/WeverseComments";
import WeverseContent, {
  WeverseContentProps,
} from "../WeverseContent/WeverseContent";
import WeverseLockedContent from "../WeverseContent/WeverseLockedContent";
import styles from "./WeversePost.module.css";

export type LockedPostDataType = {
  artistId: WeverseArtistId;
  profileNickname: string;
  createdAt: string;
  body: string;
  photos?: WeversePhoto[];
  attachedVideos?: WeverseAttachedVideos[];
};

interface Props extends WeverseContentProps {
  contentsId: string;
  artistName: ArtistNameType;
  grade: WeverseCommentsProps["grade"];
  comments?: WeverseCommentsProps["comments"];
  isLocked?: boolean;
  postError?: any;
}

const WeversePost = ({
  contentsId,
  artistName,
  comments,
  grade,
  isLocked,
  postError,
  ...props
}: Props) => {
  const [newProps, setNewProps] = useState<WeverseContentProps>(props);
  const [newArtistName, setNewArtistName] = useState<ArtistNameType>();
  const [data, setData] = useState<LockedPostDataType>();

  useEffect(() => {
    if (!data) return;
    const artistName = data?.artistId;
    setNewArtistName(getArtistNameByWeverseId(artistName));
    setNewProps({
      ...props,
      ...data,
    });
  }, [data]);
  const isLockedPost = !data && postError && isLocked;
  let curArtistName = grade ? artistName : "MEDIA";
  if (isLockedPost) curArtistName = "default";
  if (newArtistName) curArtistName = newArtistName;

  return (
    <div className={styles.wrapper}>
      <Card artistName={curArtistName as ArtistNameType}>
        {!isLockedPost ? (
          <WeverseContent {...newProps!} />
        ) : (
          <WeverseLockedContent contentsId={contentsId} setData={setData} />
        )}
      </Card>
      {!!comments?.length && (
        <WeverseComments
          comments={comments}
          grade={isLocked ? "ARTIST" : grade}
        />
      )}
    </div>
  );
};

export default memo(WeversePost);
