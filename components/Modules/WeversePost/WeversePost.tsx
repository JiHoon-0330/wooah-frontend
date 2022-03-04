import { memo, useCallback, useEffect, useState } from "react";
import getArtistNameByWeverseId from "../../../services/artist/artistName";
import { ArtistNameType } from "../../../types/artist";
import { WeverseComment } from "../../../types/weverse/weverseType";
import Card from "../../Atoms/Card/Card";
import WeverseComments, {
  WeverseCommentsProps,
} from "../WeverseComments/WeverseComments";
import WeverseContent, {
  WeverseContentProps,
} from "../WeverseContent/WeverseContent";
import WeverseLockedContent, {
  LockedPostDataType,
} from "../WeverseContent/WeverseLockedContent";
import Button from "../../Atoms/Button/Button";
import styles from "./WeversePost.module.css";
import customAxios from "../../../services/api/customAxios";

interface Props extends WeverseContentProps {
  contentsId: string;
  artistName: ArtistNameType;
  grade: WeverseCommentsProps["grade"];
  comments?: WeverseCommentsProps["comments"];
  isLocked?: boolean;
  postError?: any;
}

type CommentsType = WeverseComment[] | WeverseComment[][];

const WeversePost = ({
  artistName,
  contentsType,
  contentsId,
  comments,
  grade,
  isLocked,
  postError,
  ...props
}: Props) => {
  const [newProps, setNewProps] = useState<WeverseContentProps>({
    ...props,
    contentsType,
  });
  const [newArtistName, setNewArtistName] = useState<ArtistNameType>();
  const [data, setData] = useState<LockedPostDataType>();
  const [refreshComments, setRefreshComments] = useState<CommentsType>();

  useEffect(() => {
    if (!data) return;
    const artistId = data?.artistId;
    setNewArtistName(getArtistNameByWeverseId(artistId));
    setNewProps({
      ...props,
      ...data,
      contentsType,
    });
  }, [data]);
  const isLockedPost = !data && postError && isLocked;
  let curArtistName = (grade ? artistName : "MEDIA") as ArtistNameType;
  if (isLockedPost) curArtistName = "default";
  if (newArtistName) curArtistName = newArtistName;

  const getRefreshComments = useCallback(async () => {
    const [data, error] = await customAxios<CommentsType>({
      url: `/weverse/comments`,
      method: "GET",
      params: {
        contentsId,
        contentsType,
      },
    });

    if (data) setRefreshComments(data);
    if (error) alert("댓글 갱신을 실패했습니다.");
  }, [contentsId]);

  return (
    <div className={styles.wrapper}>
      <Card artistName={curArtistName}>
        {!isLockedPost ? (
          <WeverseContent {...newProps!} />
        ) : (
          <WeverseLockedContent contentsId={contentsId} setData={setData} />
        )}
      </Card>
      {!!comments?.length && (
        <>
          <WeverseComments
            comments={refreshComments || comments}
            grade={isLocked ? "ARTIST" : grade}
          />
          {grade === "ARTIST" && (
            <Button onClick={getRefreshComments}>댓글 갱신</Button>
          )}
        </>
      )}
    </div>
  );
};

export default memo(WeversePost);
