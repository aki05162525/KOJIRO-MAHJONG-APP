import type { League } from "@/domain/league";
import type { Match } from "@/domain/match";
import { fetcher } from "@/infra/api/client";
import {
  getMatchListPresentation,
  type MatchPresentation,
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
  matchNumber?: number
): UseMatchesReturn => {
  const { data, error, isLoading } = useSWR<MatchesApiResponse>(
    leagueId ? `/api/leagues/${leagueId}/matches` : null,
    fetcher
  );

  const allMatches = data ? data.matches : [];

  // useMemoでパフォーマンス最適化
  const availableMatchNumbers = useMemo(() => {
    return [...new Set(allMatches.map((match) => match.matchNumber))].sort(
      (a, b) => b - a
    );
  }, [allMatches]);

  const latestMatchNumber = availableMatchNumbers[0];
  const targetMatchNumber = matchNumber ?? latestMatchNumber;
  const hasMatches = availableMatchNumbers.length > 0;

  // useMemoでパフォーマンス最適化
  const filteredMatches = useMemo(() => {
    if (!targetMatchNumber) return [];
    return allMatches.filter(
      (match) => match.matchNumber === targetMatchNumber
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
import { RecordedMatchCard } from "@/components/blocks/match-card/RecordedMatchCard";
import { UnrecordedMatchCard } from "@/components/blocks/match-card/UnrecordedMatchCard";
import { PageHeader } from "@/components/layouts/page-header";
import { useMatches } from "@/usecases/matches/useMatches";
import { Spinner, VStack, Box, Text, Select } from "@chakra-ui/react";
import type React from "react";
import { useState } from "react";

interface MatchesScreenProps {
  leagueId: string;
}

export const MatchesScreen: React.FC<MatchesScreenProps> = ({ leagueId }) => {
  const [selectedMatchNumber, setSelectedMatchNumber] = useState<
    number | undefined
  >(undefined);
  const {
    matches,
    leagueName,
    isLoading,
    isError,
    availableMatchNumbers,
    latestMatchNumber,
    hasMatches,
  } = useMatches(leagueId, selectedMatchNumber);

  if (isLoading) {
    return <Spinner size="xl" />;
  }
  if (isError) {
    return <div>Error loading matches. Please try again later.</div>;
  }

  // マッチが存在しない場合の処理
  if (!hasMatches) {
    return (
      <div>
        <PageHeader title={leagueName} />
        <Box textAlign="center" py={8}>
          <Text fontSize="lg" color="gray.500">
            まだ試合が登録されていません
          </Text>
        </Box>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title={leagueName} />
      <Box mb={4}>
        <Select
          value={selectedMatchNumber ?? latestMatchNumber}
          onChange={(e) => setSelectedMatchNumber(Number(e.target.value))}
          width="200px"
          borderRadius="md"
        >
          {availableMatchNumbers.map((matchNumber) => (
            <option key={matchNumber} value={matchNumber}>
              第{matchNumber}節
            </option>
          ))}
        </Select>
      </Box>
      <VStack align="stretch" pt={4} spaceY={4}>
        {matches.length === 0 ? (
          <Box textAlign="center" py={8}>
            <Text fontSize="lg" color="gray.500">
              選択した節に試合がありません
            </Text>
          </Box>
        ) : (
          matches.map((match) =>
            match.status === "recorded" && match.recordedPlayers ? (
              <RecordedMatchCard
                key={match.id}
                displayName={match.displayName}
                players={match.recordedPlayers}
                onClick={() => {
                  console.log(`Match ${match.id} details`);
                }}
              />
            ) : (
              <UnrecordedMatchCard
                key={match.id}
                displayName={match.displayName}
                players={match.playerNames}
                onClick={() => {
                  console.log(`Record match ${match.id}`);
                }}
              />
            )
          )
        )}
      </VStack>
    </div>
  );
};
