import { rest } from "msw";
import { dataSchedule } from "../data/schedule/dataSchedule";

export const scheduleHandlers = [
  rest.get("/schedule", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dataSchedule));
  }),
];
