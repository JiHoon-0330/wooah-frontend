import { WeverseReturn } from "./weverseType";
export interface WEVERSE_API {
  "GET WEVERSE_POST /weverse": {
    query?: {
      from?: string;
    };
    return: { data: WeverseReturn[]; lastId: number; hasMore: boolean };
  };
}
