import { MemberIdType } from "../../types/weverse/weverseType";

const getArtistNameByWeverseId = (artistId: MemberIdType | any) => {
  switch (artistId) {
    case "287797a9070d1c7b9276b68aa2aae940":
      return "NANA";
    case "ce731ac8ed27380b2a1c134ab0f16928":
      return "WOOYEON";
    case "1a0790fc97ab2226299e0be040d37131":
      return "SORA";
    case "406ce8cdf0321afb462da0f782e9c15e":
      return "LUCY";
    case "578c28ecd0cd9a2d20c8c0badaa09e23":
      return "MINSEO";
    case undefined:
      return "default";
    default:
      return "default";
  }
};

export default getArtistNameByWeverseId;
