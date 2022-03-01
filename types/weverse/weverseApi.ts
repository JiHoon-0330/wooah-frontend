import { WeverseReturn } from "./weverseType";
export interface WEVERSE_API {
  "GET WEVERSE_POST /weverse": {
    query?: {};
    return: { data: WeverseReturn[]; lastId: number; hasMore: boolean };
  };
}
