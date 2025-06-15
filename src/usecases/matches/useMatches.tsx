import type { Match } from "@/domain/match";
import { fetcher } from "@/infra/api/client";
import { getMatchListPresentation } from "@/presenters/matches";
import useSWR from "swr";

export const useMatches = (leagueId: string) => {
  const { data, error, isLoading } = useSWR<Match[]>(
    leagueId ? `/api/leagues/${leagueId}/matches` : null,
    fetcher
  );

  const matches = data ? getMatchListPresentation(data) : [];

  return {
    matches,
    isLoading,
    isError: error,
  };
};
