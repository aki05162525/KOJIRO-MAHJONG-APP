import MatchCard from "@/components/MatchCard";

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
				players={["りゅうと", "なるみ", "りゅうじろう", "あきひろ"]}
			/>
		</main>
	);
}
