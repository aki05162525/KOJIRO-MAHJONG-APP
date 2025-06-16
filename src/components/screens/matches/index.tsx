import { RecordedMatchCardTest } from "@/components/blocks/match-card/RecordedMatchCard";
import { UnrecordedMatchCard } from "@/components/blocks/match-card/UnrecordedMatchCard";
import { PageHeader } from "@/components/layouts/page-header";
import { useMatches } from "@/usecases/matches/useMatches";
import { Spinner, VStack } from "@chakra-ui/react";
import type React from "react";

interface MatchesScreenProps {
  leagueId: string;
}

export const MatchesScreen: React.FC<MatchesScreenProps> = ({ leagueId }) => {
  const { matches, leagueName, isLoading, isError } = useMatches(leagueId);

  if (isLoading) {
    return <Spinner size="xl" />;
  } //TODO 将来的に修正
  if (isError) {
    return <div>Error loading matches. Please try again later.</div>;
  } //TODO エラーハンドリングを将来的にまとめる！

  return (
    <div>
      <PageHeader title={leagueName} />
      <VStack align="stretch" pt={4} spaceY={4}>
        {matches.map((match) => (
          <UnrecordedMatchCard
            key={match.id}
            displayName={match.displayName}
            players={match.playerNames}
          />
        ))}
        <RecordedMatchCardTest />
      </VStack>
    </div>
  );
};
