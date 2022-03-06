import { twitterHandlers } from "./twitterHandlers";
import { weverseHandlers } from "./weverseHandlers";

export const handlers = [...weverseHandlers, ...twitterHandlers];
