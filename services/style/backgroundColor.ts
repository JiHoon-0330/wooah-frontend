import { ArtistNameType } from "../../types/artist";

const getBackgroundColorClass = (
  artistName: ArtistNameType | "MEDIA" | undefined,
) => {
  switch (artistName) {
    case "NANA":
      return "BG_NANA";
    case "WOOYEON":
      return "BG_WOOYEON";
    case "SORA":
      return "BG_SORA";
    case "LUCY":
      return "BG_LUCY";
    case "MINSEO":
      return "BG_MINSEO";
    case "MEDIA":
      return "BG_MEDIA";
    default:
      return "BG_DEFAULT";
  }
};

export default getBackgroundColorClass;
