import type { SWRConfiguration } from "swr";
import { fetcher } from "../api/client";

export const swrConfig: SWRConfiguration = {
	fetcher,
};
