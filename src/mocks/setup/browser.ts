import { setupWorker } from "msw/browser";
import { handlers as leagueHandlers } from "../league/index";
import { handlers as matchHandlers } from "../match/index";

export const worker = setupWorker(...leagueHandlers, ...matchHandlers);
