import { WeverseAttachedVideos } from "./../../types/weverse/weverseType";

const getFormattedMedias = (medias: WeverseAttachedVideos[]) => {
  return medias.map(({ videoUrl, thumbnailUrl }) => ({
    src: videoUrl,
    poster: thumbnailUrl,
  }));
};

export default getFormattedMedias;
