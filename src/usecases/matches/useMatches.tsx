import type { Match } from "@/domain/match";
import { fetcher } from "@/infra/api/client";
import useSWR from "swr";

export const useMatches = (leagueId: string) => {
  const { data, error, isLoading } = useSWR<Match[]>(
    leagueId ? `/api/leagues/${leagueId}/matches` : null,
    fetcher
  );

  return {
    matches: data || [],
    isLoading,
    isError: error,
  };
};
