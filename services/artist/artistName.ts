import { WeverseArtistId } from "../../types/weverse/weverseType";

const getArtistNameByWeverseId = (artistId: WeverseArtistId) => {
  switch (artistId) {
    case 109:
      return "NANA";
    case 110:
      return "WOOYEON";
    case 111:
      return "SORA";
    case 112:
      return "LUCY";
    case 113:
      return "MINSEO";
    case undefined:
      return "default";
    default:
      console.warn(`(getArtistNameByWeverseId) unknown artist id: `, artistId);
      return "default";
  }
};

export default getArtistNameByWeverseId;
