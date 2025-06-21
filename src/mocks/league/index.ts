import { http, HttpResponse, type RequestHandler, delay } from "msw";
import { leaguesResponse } from "./res/leagues";

const handlers: RequestHandler[] = [
	//リーグ一覧取得
	http.get("/api/leagues", async () => {
		await delay();
		return HttpResponse.json(leaguesResponse);
	}),
];

export { handlers };
