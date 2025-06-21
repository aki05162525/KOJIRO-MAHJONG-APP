import { RecordedMatchCard } from "@/components/blocks/match-card/RecordedMatchCard";
import { UnrecordedMatchCard } from "@/components/blocks/match-card/UnrecordedMatchCard";
import { PageHeader } from "@/components/layouts/page-header";
import { useMatches } from "@/usecases/matches/useMatches";
import { Spinner, VStack, Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import type React from "react";
import { useState } from "react";

interface MatchesScreenProps {
  leagueId: string;
}

export const MatchesScreen: React.FC<MatchesScreenProps> = ({ leagueId }) => {
  const router = useRouter();

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

  const handleRecordMatch = (matchId: string) => {
    router.push(`/leagues/${leagueId}/matches/${matchId}/record`);
  };

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
        <select
          value={selectedMatchNumber ?? latestMatchNumber}
          onChange={(e) => setSelectedMatchNumber(Number(e.target.value))}
          style={{
            width: "200px",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #E2E8F0",
            backgroundColor: "white",
            fontSize: "16px",
          }}
        >
          {availableMatchNumbers.map((matchNumber) => (
            <option key={matchNumber} value={matchNumber}>
              第{matchNumber}節
            </option>
          ))}
        </select>
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
                onClick={() => handleRecordMatch(match.id)}
              />
            )
          )
        )}
      </VStack>
    </div>
  );
};
