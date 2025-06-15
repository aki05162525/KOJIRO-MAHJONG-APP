import { MatchCard } from "@/components/blocks/match-card";
import { PageHeader } from "@/components/layouts/page-header";
import { useMatches } from "@/usecases/matches/useMatches";
import { VStack, Text } from "@chakra-ui/react";
import { match } from "assert";
import type React from "react";

interface MatchesScreenProps {
  leagueId: string;
}

export const MatchesScreen: React.FC<MatchesScreenProps> = ({ leagueId }) => {
  const { matches } = useMatches(leagueId);

  return (
    <div>
      {/* todo リーグ名を挿入 */}
      <PageHeader title="リーグ詳細" />
      <VStack align="stretch" pt={4} spaceY={4}>
        {matches.map((match) => (
          <MatchCard
            key={match.id}
            ruleName={match.id}
            players={match.players.map((p) => p.player.name)}
          />
        ))}
      </VStack>
    </div>
  );
};
