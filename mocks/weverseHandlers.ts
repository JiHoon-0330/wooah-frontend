import { WEVERSE_API } from "./../types/weverse/weverseApi";
import { rest } from "msw";
import dataWeverse from "../data/weverse/dataWeverse";

export const weverseApi = (
  type: keyof WEVERSE_API,
  func: Parameters<typeof rest.all>[1],
) => {
  switch (type) {
    case "GET WEVERSE_POST /weverse":
      return rest.get("/weverse", func);
  }
};

export const weverseHandlers = [
  weverseApi("GET WEVERSE_POST /weverse", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dataWeverse));
  }),

  rest.get("/weverse/translation", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ translation: "번역된 데이터" }));
  }),

  rest.post("/post/:contentsId", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
