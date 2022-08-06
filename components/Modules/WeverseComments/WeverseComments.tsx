import { memo } from "react";
import getArtistNameByWeverseId from "../../../services/artist/artistName";
import { WeverseComment } from "../../../types/weverse/weverseType";
import Card from "../../Atoms/Card/Card";
import WeverseContent from "../WeverseContent/WeverseContent";
import styles from "./WeverseComments.module.css";

export interface WeverseCommentsProps {
  comments: [WeverseComment, WeverseComment[]][];
}

const WeverseComments = ({ comments }: WeverseCommentsProps) => {
  if (!comments?.length) {
    return null;
  }

  return (
    <div>
      {comments.map(([parent, childs], index) => {
        const name = getArtistNameByWeverseId(parent.author.memberId);

        return (
          <div
            key={parent.commentId}
            className={comments?.length - 1 !== index ? styles.container : ""}
          >
            <Card artistName={name}>
              <WeverseContent {...parent} />
            </Card>
            {!!childs?.length &&
              childs.map((child) => {
                const name = getArtistNameByWeverseId(child.author.memberId);

                return (
                  <Card key={child.commentId} artistName={name}>
                    <WeverseContent {...child} />
                  </Card>
                );
              })}
          </div>
        );
      })}
    </div>
  );
};

export default memo(WeverseComments);
