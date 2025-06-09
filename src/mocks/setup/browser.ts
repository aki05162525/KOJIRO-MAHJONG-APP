import { setupWorker } from "msw/browser";
import { handlers } from "../league/index";

export const worker = setupWorker(...handlers);
