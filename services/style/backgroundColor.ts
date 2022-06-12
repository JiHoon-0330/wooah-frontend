import { ArtistNameType } from "../../types/artist";

export type Name = "나나" | "우연" | "소라" | "루시" | "민서";

const getBackgroundColorClass = (
  artistName: ArtistNameType | Name | "MEDIA" | undefined,
) => {
  switch (artistName) {
    case "NANA":
    case "나나":
      return "BG_NANA";
    case "WOOYEON":
    case "우연":
      return "BG_WOOYEON";
    case "SORA":
    case "소라":
      return "BG_SORA";
    case "LUCY":
    case "루시":
      return "BG_LUCY";
    case "MINSEO":
    case "민서":
      return "BG_MINSEO";
    case "MEDIA":
      return "BG_MEDIA";
    default:
      return "BG_DEFAULT";
  }
};

export default getBackgroundColorClass;
