import { RecordedMatchCard } from "@/components/blocks/match-card/RecordedMatchCard";
import { UnrecordedMatchCard } from "@/components/blocks/match-card/UnrecordedMatchCard";
import { PageHeader } from "@/components/layouts/page-header";
import { useMatches } from "@/usecases/matches/useMatches";
import { Spinner, VStack, Box } from "@chakra-ui/react";
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
  } = useMatches(leagueId, selectedMatchNumber);

  if (isLoading) {
    return <Spinner size="xl" />;
  } //TODO 将来的に修正
  if (isError) {
    return <div>Error loading matches. Please try again later.</div>;
  } //TODO エラーハンドリングを将来的にまとめる！

  return (
    <div>
      <PageHeader title={leagueName} />
      <Box mb={4}>
        <select
          value={selectedMatchNumber || latestMatchNumber}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSelectedMatchNumber(Number(e.target.value))
          }
          style={{
            width: "200px",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
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
        {matches.map((match) =>
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
        )}
      </VStack>
    </div>
  );
};
