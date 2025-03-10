import { matchCardRecipe, textStyle } from "./styles";

type MatchCardProps = {
	ruleName: string; // "初期卓A"
	buttonLabel: string; //  "記録"
	players: string[]; // 例: ["りゅうと", "なるみ", "りゅうじろう", "あきひろ"]
};

const DIRECTIONS = ["東家", "南家", "西家", "北家"];

const MatchCard = ({ ruleName, buttonLabel, players }: MatchCardProps) => {
	return (
		<div className={matchCardRecipe({ component: "cardContainer" })}>
			{/* ヘッダー */}
			<div className={matchCardRecipe({ component: "header" })}>
				<span className={textStyle({ type: "ruleName" })}>{ruleName}</span>
				<button
					className={matchCardRecipe({ component: "recordButton" })}
					type="button"
				>
					{buttonLabel}
				</button>
			</div>

			{/* プレイヤー表示部分 */}
			<div className={matchCardRecipe({ component: "playerContainer" })}>
				{players.map((player, index) => (
					<div
						key={DIRECTIONS[index]}
						className={matchCardRecipe({ component: "playerBox" })}
					>
						<span className={textStyle({ type: "direction" })}>
							{DIRECTIONS[index]}
						</span>
						<span className={textStyle()}>{player}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default MatchCard;
