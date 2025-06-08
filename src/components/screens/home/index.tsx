import { LeagueListHeader } from "@/components/blocks/league-list-header";
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
				<Text color="gray.500">リーグがまだ登録されていません。</Text>
				<Box
					borderWidth={2}
					borderRadius="lg"
					p={4}
					borderColor="gray.300"
					mt={4}
				>
					<Heading as="h2" size="md">
						リーグの名前が入る
					</Heading>
					<Text color="gray.500" mt={1}>
						詳細を表示
					</Text>
				</Box>
			</VStack>
			{leagues.map((league) => (
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
