import { memo } from "react";
import getArtistNameByWeverseId from "../../../services/artist/artistName";
import { WeverseReturn } from "../../../types/weverse/weverseType";
import Card from "../../Atoms/Card/Card";
import WeverseComments from "../WeverseComments/WeverseComments";
import WeverseContent from "../WeverseContent/WeverseContent";
import WeverseLockedContent from "../WeverseContent/WeverseLockedContent";
import styles from "./WeversePost.module.css";

const WeversePost = (props: WeverseReturn) => {
  const name = getArtistNameByWeverseId(props?.author?.memberId);

  return (
    <div className={styles.wrapper}>
      <Card artistName={name}>
        {!props?.locked ? (
          <WeverseContent {...props} />
        ) : (
          <WeverseLockedContent postId={props.postId} />
        )}
      </Card>
      {!!props?.comments?.length && (
        <>
          <WeverseComments comments={props?.comments} />
          {/* {grade === "ARTIST" && (
            <Button onClick={getRefreshComments}>댓글 갱신</Button>
          )} */}
        </>
      )}
    </div>
  );
};

export default memo(WeversePost);
