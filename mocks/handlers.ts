import { reelsHandlers } from "./reelsHandler";
import { scheduleHandlers } from "./scheduleHandlers";
import { twitterHandlers } from "./twitterHandlers";
import { weverseHandlers } from "./weverseHandlers";

export const handlers = [
  ...weverseHandlers,
  ...twitterHandlers,
  ...reelsHandlers,
  ...scheduleHandlers,
];
