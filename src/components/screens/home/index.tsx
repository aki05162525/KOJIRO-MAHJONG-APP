import { LeagueListHeader } from "@/components/blocks/league-list-header";
import type { League } from "@/domain/league";
import { useAppDispatch, useAppSelector } from "@/hooks/app";
import { leaguesSelector } from "@/infla/states/leagues/selector";
import { fetchLeagues } from "@/usecases/leagues";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
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
      </VStack>
      {leagues.map((league: League) => (
        <Box
          key={league.id}
          borderWidth={2}
          borderRadius="lg"
          p={4}
          borderColor="gray.300"
          mt={4}
          cursor="pointer"
          _hover={{ borderColor: "blue.300" }}
        >
          <Heading as="h2" size="md">
            {league.name}
          </Heading>
          <Text color="gray.500" mt={1}>
            詳細を表示
          </Text>
        </Box>
      ))}
    </div>
  );
};
