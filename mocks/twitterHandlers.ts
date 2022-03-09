import { rest } from "msw";
import dataTwitter from "../data/twitter/dataTwitter";
import { TWITTER_API } from "../types/twitter/twitterApi";

export const twitterApi = (
  type: keyof TWITTER_API,
  func: Parameters<typeof rest.all>[1],
) => {
  switch (type) {
    case "GET TWITTER_POST /twitter":
      return rest.get("/twitter", func);
  }
};

export const twitterHandlers = [
  twitterApi("GET TWITTER_POST /twitter", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dataTwitter));
  }),
];
