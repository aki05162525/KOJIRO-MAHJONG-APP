import { setupServer } from "msw/node";
import { handlers } from "../league/index";

export const server = setupServer(...handlers);
