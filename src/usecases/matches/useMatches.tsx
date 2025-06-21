import type { League } from "@/domain/league";
import type { Match } from "@/domain/match";
import { fetcher } from "@/infra/api/client";
import {
	type MatchPresentation,
	getMatchListPresentation,
} from "@/presenters/matches";
import { useMemo } from "react";
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
	latestMatchNumber: number | undefined;
	hasMatches: boolean;
}

export const useMatches = (
	leagueId: string,
	matchNumber?: number,
): UseMatchesReturn => {
	const { data, error, isLoading } = useSWR<MatchesApiResponse>(
		leagueId ? `/api/leagues/${leagueId}/matches` : null,
		fetcher,
	);

	const allMatches = data ? data.matches : [];

	// useMemoでパフォーマンス最適化
	const availableMatchNumbers = useMemo(() => {
		return [...new Set(allMatches.map((match) => match.matchNumber))].sort(
			(a, b) => b - a,
		);
	}, [allMatches]);

	const latestMatchNumber = availableMatchNumbers[0];
	const targetMatchNumber = matchNumber ?? latestMatchNumber;
	const hasMatches = availableMatchNumbers.length > 0;

	// useMemoでパフォーマンス最適化
	const filteredMatches = useMemo(() => {
		if (!targetMatchNumber) return [];
		return allMatches.filter(
			(match) => match.matchNumber === targetMatchNumber,
		);
	}, [allMatches, targetMatchNumber]);

	const matches = getMatchListPresentation(filteredMatches);
	const leagueName = data?.league.name || "";

	return {
		matches,
		leagueName,
		isLoading,
		isError: !!error,
		availableMatchNumbers,
		latestMatchNumber,
		hasMatches,
	};
};
