import { UnrecordedMatchCard } from "@/components/blocks/match-card/UnrecordedMatchCard";
import { PageHeader } from "@/components/layouts/page-header";
import { useMatches } from "@/usecases/matches/useMatches";
import { VStack } from "@chakra-ui/react";
import type React from "react";

interface MatchesScreenProps {
  leagueId: string;
}

export const MatchesScreen: React.FC<MatchesScreenProps> = ({ leagueId }) => {
  const { matches } = useMatches(leagueId);

  return (
    <div>
      {/* todo リーグ名を挿入 */}
      <PageHeader title="hoge" />
      <VStack align="stretch" pt={4} spaceY={4}>
        {matches.map((match) => (
          <UnrecordedMatchCard
            key={match.id}
            displayName={match.displayName}
            players={match.playerNames}
          />
        ))}
      </VStack>
    </div>
  );
};
