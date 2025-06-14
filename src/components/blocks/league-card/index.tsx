import type { League } from "@/domain/league";
import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface LeagueCardProps {
  league: League;
  onClick?: (league: League) => void;
}

export const LeagueCard = ({ league, onClick }: LeagueCardProps) => {
  return (
    <Link href={`/leagues/${league.id}`}>
      <Box
        borderWidth={2}
        borderRadius="lg"
        p={4}
        borderColor="gray.300"
        cursor="pointer"
        _hover={{ borderColor: "blue.300" }}
        onClick={() => onClick?.(league)}
      >
        <Heading as="h2" size="md">
          {league.name}
        </Heading>
        <Text color="gray.500" mt={1}>
          詳細を表示
        </Text>
      </Box>
    </Link>
  );
};
