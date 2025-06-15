import type { League } from "@/domain/league";
import type { Match } from "@/domain/match";
import { fetcher } from "@/infra/api/client";
import { getMatchListPresentation } from "@/presenters/matches";
import useSWR from "swr";

interface MatchesApiResponse {
  league: League;
  matches: Match[];
}

export const useMatches = (leagueId: string) => {
  const { data, error, isLoading } = useSWR<MatchesApiResponse>(
    leagueId ? `/api/leagues/${leagueId}/matches` : null,
    fetcher
  );

  const matches = data ? getMatchListPresentation(data.matches) : [];
  const leagueName = data?.league.name || "";

  return {
    matches,
    leagueName,
    isLoading,
    isError: error,
  };
};
