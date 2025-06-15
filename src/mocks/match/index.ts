import { delay, http, HttpResponse, type RequestHandler } from "msw";
import { matchesResponse } from "./res/matches";

const handlers: RequestHandler[] = [
  // 特定リーグのマッチ一覧取得
  http.get("/api/leagues/:leagueId/matches", async ({ params }) => {
    await delay();

    const leagueId = params.leagueId as string;
    const matches = matchesResponse[leagueId];

    if (!matches) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(matches);
  }),
];

export { handlers };
