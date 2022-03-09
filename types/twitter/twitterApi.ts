import { Twitter } from "./twitter";

export interface TWITTER_API {
  "GET TWITTER_POST /twitter": {
    query?: {
      from?: string;
    };
    return: {
      data: Twitter[];
      cursor: string;
    };
  };
}
