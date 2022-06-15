import Link from "next/link";
import { memo, useMemo } from "react";
import useTwemoji from "../../../hooks/useTwemoji";
import { Reels } from "../../../types/reels/reels";
import { API_DOMAIN } from "../../../utils/env";
import Card from "../../Atoms/Card/Card";
import Date from "../../Atoms/Date/Date";
import Medias from "../../Atoms/Media/Medias";
import styles from "./Reels.module.css";

const ReelsPost = ({ body, createdAt, poster, src }: Reels) => {
  const ref = useTwemoji(body);

  const formattedBody = body
    .replace(/#[^\s#]+/g, (tag) => {
      return `<a class="twitter__hashtag" href=https://www.instagram.com/explore/tags/${tag.slice(
        1,
      )} target="_blank"/>${tag}</a>`;
    })
    .replace(/@[^\s@]+/g, (tag) => {
      return `<a class="twitter__hashtag" href=https://www.instagram.com/${tag.slice(
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
        <div className={styles.title}>
          <Link href="https://www.instagram.com/wooah_nv">
            <a target="_blank">@wooah_nv</a>
          </Link>
          <Date date={createdAt * 1000} />
        </div>
        <Medias
          type="reels"
          medias={useMemo(
            () => [
              {
                poster: proxyUrl(poster),
                src: `${API_DOMAIN}/instagram/video?url=${encodeURIComponent(
                  src,
                )}&createdAt=${createdAt}`,
              },
            ],
            [poster, src, createdAt],
          )}
        />
        <div className={styles.container}>
          <div
            ref={ref}
            className={styles.body}
            dangerouslySetInnerHTML={{ __html: formattedBody }}
          />
        </div>
      </div>
    </Card>
  );
};

export default memo(ReelsPost);
