import { LeagueCard } from "@/components/blocks/league-card";
import { LeagueListHeader } from "@/components/blocks/league-list-header";
import { RecordedMatchCardTest } from "@/components/blocks/match-card/RecordedMatchCard";
import type { League } from "@/domain/league";
import { useLeagues } from "@/usecases/leagues/useLeagues";
import { Text, VStack } from "@chakra-ui/react";

export const HomeScreen = () => {
  const { leagues, isLoading } = useLeagues();

  if (isLoading) return <Text>読み込み中...</Text>;

  return (
    <div>
      <LeagueListHeader />
      <VStack align="stretch" pt={10} spaceY={3}>
        {leagues.length === 0 && (
          <Text color="gray.500">リーグがまだ登録されていません。</Text>
        )}
        {leagues.map((league: League) => (
          <LeagueCard key={league.id} league={league} />
        ))}
        <RecordedMatchCardTest />
      </VStack>
    </div>
  );
};
