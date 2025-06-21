import { Box, Text, SimpleGrid, VStack, Flex } from "@chakra-ui/react";
import { ArrowUp, ArrowDown, Eye } from "lucide-react";
import type React from "react";
import type { RecordedMatchPlayerPresentation } from "@/presenters/matches";

interface RecordedMatchCardProps {
  displayName: string;
  players: RecordedMatchPlayerPresentation[];
  onClick?: () => void;
}

export const RecordedMatchCard: React.FC<RecordedMatchCardProps> = ({
  displayName,
  players,
  onClick,
}) => {
  const getWindDirection = (seat: number) => {
    const windMap = {
      0: "東家",
      1: "南家",
      2: "西家",
      3: "北家",
    } as const;
    return windMap[seat as keyof typeof windMap] || "";
  };

  const getRankIcon = (rank: number) => {
    return rank <= 2 ? (
      <ArrowUp size={16} color="red" />
    ) : (
      <ArrowDown size={16} color="blue" />
    );
  };

  // seatの順番でソート（0:東家, 1:南家, 2:西家, 3:北家）
  const sortedPlayers = [...players].sort((a, b) => a.seat - b.seat);

  return (
    <Box
      borderWidth={2}
      borderColor="gray.300"
      borderRadius="2xl"
      p={6}
      cursor="pointer"
      onClick={onClick}
      _hover={{
        borderColor: "blue.400",
        transform: "translateY(-2px)",
        boxShadow: "md",
      }}
      transition="all 0.2s"
    >
      <Flex justify="space-between" align="center" mb={6}>
        <Text fontSize="xl" fontWeight="bold" color="gray.800">
          {displayName}
        </Text>
        <Flex align="center" gap={2}>
          <Eye size={20} />
          <Text fontSize="sm" color="gray.800" fontWeight="medium">
            詳細
          </Text>
        </Flex>
      </Flex>
      <SimpleGrid columns={2} gap="15px">
        {sortedPlayers.slice(0, 4).map((player, index) => (
          <VStack
            key={`${player.name}-${index}`}
            bg="gray.200"
            borderRadius="xl"
            p={4}
            justify="center"
          >
            <Flex align="center" gap={1}>
              {getRankIcon(player.rank)}
              <Text fontSize="xs" fontWeight="medium" color="gray.600">
                {getWindDirection(player.seat)}
              </Text>
            </Flex>
            <Text fontSize="md" fontWeight="bold" color="gray.800">
              {player.name}
            </Text>
            <Text fontSize="sm" fontWeight="medium" color="gray.600">
              {player.point}pt
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};
