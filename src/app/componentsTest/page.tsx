import MatchCard from "@/components/match/MatchCard";

export default function componentsTest() {
	return (
		<main
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<MatchCard
				ruleName="初期卓A"
				buttonLabel="記録"
				eastPlayer="りゅうと"
				southPlayer="なるみ"
				westPlayer="りゅうじろう"
				northPlayer="あきひろ"
			/>
		</main>
	);
}
