import { Reels } from "./reels";

export interface REELS_API {
  "GET REELS_POST /instagram/reels": {
    query?: {
      from?: string;
    };
    return: { data: Reels[]; max_id: string; more_available: boolean };
  };
}
