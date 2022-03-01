import getArtistNameByWeverseId from "../../../services/artist/artistName";
import {
  WeverseComment,
  WeverseGradeType,
} from "../../../types/weverse/weverseType";
import Card from "../../Atoms/Card/Card";
import WeverseContent from "../WeverseContent/WeverseContent";
import styles from "./WeverseComments.module.css";

export interface WeverseCommentsProps {
  grade: WeverseGradeType;
  comments: WeverseComment[][] | WeverseComment[];
}

const WeverseComments = ({ grade, comments }: WeverseCommentsProps) => {
  if (!comments?.length) {
    return null;
  }

  if (grade === "FAN") {
    return (
      <div>
        {(comments as WeverseComment[]).map(({ artistId, ...props }) => {
          const artistName = getArtistNameByWeverseId(artistId);
          return (
            <Card key={props.createdAt} artistName={artistName}>
              <WeverseContent {...props} />
            </Card>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      {(comments as WeverseComment[][]).map((comment, index) => {
        const key = comment?.[index]?.createdAt;
        return (
          <div key={key || index} className={styles.container}>
            {comment?.length &&
              comment.map(
                ({ artistId, body, createdAt, grade, profileNickname }) => {
                  const artistName = getArtistNameByWeverseId(artistId);
                  return (
                    <Card key={createdAt} artistName={artistName}>
                      <WeverseContent
                        body={body}
                        profileNickname={profileNickname}
                        createdAt={createdAt}
                      />
                    </Card>
                  );
                },
              )}
          </div>
        );
      })}
    </div>
  );
};

export default WeverseComments;
