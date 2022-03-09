import { Reels } from "../../../types/reels/reels";
import { API_DOMAIN } from "../../../utils/env";
import Card from "../../Atoms/Card/Card";
import Date from "../../Atoms/Date/Date";
import Medias from "../../Atoms/Media/Medias";
import styles from "./Reels.module.css";

const ReelsPost = ({ body, createdAt, poster, src }: Reels) => {
  const formattedBody = body.replace(/#[^\s#]+/g, (tag) => {
    return `<a class="twitter__hashtag" href=https://www.instagram.com/explore/tags/${tag.slice(
      1,
    )} target="_blank"/>${tag}</a>`;
  });

  const proxyUrl = (url: string) => {
    const splitUrl = url?.split("/v/");
    return `/instagram/v/${splitUrl?.[1]}`;
  };

  return (
    <Card artistName="default">
      <div className={styles.wrapper}>
        <Medias
          medias={[
            {
              poster: proxyUrl(poster),
              src: `${API_DOMAIN}/instagram/video?url=${encodeURIComponent(
                src,
              )}&createdAt=${createdAt}`,
            },
          ]}
        />
        <div className={styles.container}>
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{ __html: formattedBody }}
          />
          <Date date={createdAt * 1000} />
        </div>
      </div>
    </Card>
  );
};

export default ReelsPost;
