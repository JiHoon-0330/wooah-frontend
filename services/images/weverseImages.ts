import { WeversePhoto } from "../../types/weverse/weverseType";

export const getFormattedImages = (photos: WeversePhoto[] | undefined) => {
  if (!photos?.length) {
    return null;
  }

  return photos?.map((image) => ({
    width: image?.imgWidth,
    height: image?.imgHeight,
    src: image?.imgUrl,
    origin: image?.orgImgUrl,
  }));
};
