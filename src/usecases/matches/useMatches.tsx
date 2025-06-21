import type { League } from "@/domain/league";
import type { Match } from "@/domain/match";
import { fetcher } from "@/infra/api/client";
import {
  getMatchListPresentation,
  type MatchPresentation,
} from "@/presenters/matches";
import useSWR from "swr";

interface MatchesApiResponse {
  league: League;
  matches: Match[];
}

interface UseMatchesReturn {
  matches: MatchPresentation[];
  leagueName: string;
  isLoading: boolean;
  isError: boolean;
}

export const useMatches = (leagueId: string): UseMatchesReturn => {
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
    isError: !!error,
  };
};
