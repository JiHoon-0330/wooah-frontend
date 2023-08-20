import Link from "next/link";
import { memo } from "react";
import useTwemoji from "../../../hooks/useTwemoji";
import { Reels } from "../../../types/reels/reels";
import { isIOS } from "../../../utils/device";
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
          <Link href="https://www.instagram.com/wooah_nv" target="_blank">
            @wooah_nv
          </Link>
          <Date date={createdAt * 1000} />
        </div>
        <Medias
          type="reels"
          medias={[
            {
              poster: proxyUrl(poster),
              src: isIOS()
                ? proxyUrl(src)
                : `${API_DOMAIN}/instagram/video?url=${encodeURIComponent(
                    src,
                  )}&createdAt=${createdAt}`,
            },
          ]}
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

// https://instagram.ficn3-4.fna.fbcdn.net/v/t66.30100-16/48735168_928466524787712_137807619184250416_n.mp4?_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=100&_nc_ohc=R47snBm4VgMAX--N_Ak&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfAWR6eomVP_VeSrjCJ0ELAaO8aCHVtBOLr7TiLnaxbwKQ&oe=63ABDE73&_nc_sid=4f375e
// https://scontent.cdninstagram.com/v/t66.30100-16/48735168_928466524787712_137807619184250416_n.mp4?_nc_ht=instagram.ficn3-4.fna.fbcdn.net&_nc_cat=100&_nc_ohc=R47snBm4VgMAX--N_Ak&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfAWR6eomVP_VeSrjCJ0ELAaO8aCHVtBOLr7TiLnaxbwKQ&oe=63ABDE73&_nc_sid=4f375e
