import { LeagueCard } from "@/components/blocks/league-card";
import { LeagueListHeader } from "@/components/blocks/league-list-header";
import type { League } from "@/domain/league";
import { useAppDispatch, useAppSelector } from "@/hooks/app";
import { leaguesSelector } from "@/infla/states/leagues/selector";
import { fetchLeagues } from "@/usecases/leagues";
import { Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const { leagues, loading } = useAppSelector(leaguesSelector);

  useEffect(() => {
    if (loading === "idle") {
      dispatch(fetchLeagues());
    }
  }, [dispatch, loading]);

  return (
    <div>
      <LeagueListHeader />
      <VStack align="stretch" pt={4}>
        {loading === "succeeded" && leagues.length === 0 && (
          <Text color="gray.500">リーグがまだ登録されていません。</Text>
        )}
        {loading === "succeeded" &&
          leagues.map((league: League) => (
            <LeagueCard key={league.id} league={league} />
          ))}
      </VStack>
    </div>
  );
};
