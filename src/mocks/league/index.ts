import { http, HttpResponse, type RequestHandler } from "msw";

const leaguesHandler = http.get("/api/leagues", () => {
  return HttpResponse.json([
    {
      id: "123",
      name: "第1回小次郎麻雀大会",
    },
    {
      id: "456",
      name: "第2回小次郎麻雀大会",
    },
  ]);
});

export const handlers: RequestHandler[] = [leaguesHandler];
