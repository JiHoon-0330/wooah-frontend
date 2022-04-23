import { rest } from "msw";
import dataReels from "../data/reels/dataReels";
import { REELS_API } from "../types/reels/reelsApi";

export const reelsApi = (
  type: keyof REELS_API,
  func: Parameters<typeof rest.all>[1],
) => {
  switch (type) {
    case "GET REELS_POST /instagram/reels":
      return rest.get("/instagram/reels", func);
  }
};

export const reelsHandlers = [
  reelsApi("GET REELS_POST /instagram/reels", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dataReels));
  }),
];
