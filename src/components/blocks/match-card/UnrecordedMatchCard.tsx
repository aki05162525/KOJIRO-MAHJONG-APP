import { Box, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { CirclePlay } from "lucide-react";
import type React from "react";

interface UnrecordedMatchCardProps {
	displayName: string; // "初期卓A"
	players: string[]; // 例: ["りゅうと", "なるみ", "りゅうじろう", "あきひろ"]
	onClick?: () => void; // カードクリック時のハンドラー
}

export const UnrecordedMatchCard: React.FC<UnrecordedMatchCardProps> = ({
	displayName,
	players,
	onClick,
}) => {
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
			{/* タイトルと記録表示 */}
			<Flex justify="space-between" align="center" mb={6}>
				<Text fontSize="xl" fontWeight="bold" color="gray.800">
					{displayName}
				</Text>
				<Flex align="center" gap={2}>
					<CirclePlay size={20} />
					<Text fontSize="sm" color="gray.800" fontWeight="medium">
						記録する
					</Text>
				</Flex>
			</Flex>{" "}
			{/* プレイヤーグリッド */}{" "}
			<SimpleGrid columns={2} gap="15px">
				{players.slice(0, 4).map((player, _index) => (
					<VStack
						key={player}
						bg="gray.200"
						borderRadius="xl"
						p={4}
						justify="center"
					>
						<Text fontSize="md" fontWeight="bold" color="gray.800">
							{player}
						</Text>
					</VStack>
				))}
			</SimpleGrid>
		</Box>
	);
};
