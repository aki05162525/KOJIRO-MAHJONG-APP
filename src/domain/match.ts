import type { League } from "./league";
import type { Player } from "./player";

export type MatchStatus = "recorded" | "not_recorded";
export type RuleType = "INITIAL" | "UPPER" | "LOWER";

export interface MatchPlayer {
	player: Player;
	seat?: 0 | 1 | 2 | 3; // 東南西北（記録済みの場合のみ）
	score?: number; // 記録済みの場合のみ
	rank?: number; // 記録済みの場合のみ
	point?: number; // 記録済みの場合のみ
}

export interface Match {
	id: string;
	tableId: string;
	matchNumber: number;
	ruleType: RuleType;
	status: MatchStatus;
	players: MatchPlayer[];
}
