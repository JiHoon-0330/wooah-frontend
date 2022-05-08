import { WeverseAttachedVideos } from "./../../types/weverse/weverseType";

const getFormattedMedias = (medias: WeverseAttachedVideos[] | undefined) => {
  if (!medias?.length) return [];
  return medias.map(({ videoUrl, thumbnailUrl }) => ({
    src: videoUrl,
    poster: thumbnailUrl,
  }));
};

export default getFormattedMedias;
