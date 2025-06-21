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
  availableMatchNumbers: number[];
  latestMatchNumber: number;
}

export const useMatches = (
  leagueId: string,
  matchNumber?: number
): UseMatchesReturn => {
  const { data, error, isLoading } = useSWR<MatchesApiResponse>(
    leagueId ? `/api/leagues/${leagueId}/matches` : null,
    fetcher
  );

  const allMatches = data ? data.matches : [];
  const availableMatchNumbers = [
    ...new Set(allMatches.map((match) => match.matchNumber)),
  ].sort((a, b) => b - a);
  const latestMatchNumber = availableMatchNumbers[0] || 1;
  const targetMatchNumber = matchNumber || latestMatchNumber;

  const filteredMatches = allMatches.filter(
    (match) => match.matchNumber === targetMatchNumber
  );
  const matches = getMatchListPresentation(filteredMatches);
  const leagueName = data?.league.name || "";

  return {
    matches,
    leagueName,
    isLoading,
    isError: !!error,
    availableMatchNumbers,
    latestMatchNumber,
  };
};
