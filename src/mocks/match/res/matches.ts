import type { League } from "@/domain/league";
import type { Match } from "@/domain/match";

// メタデータとマッチデータを分離
export interface MatchesResponse {
	league: League;
	matches: Match[];
}

export const matchesResponse: Record<string, MatchesResponse> = {
	// リーグID "123" のデータ
	"123": {
		league: {
			id: "123",
			name: "第1回小次郎麻雀大会",
		},
		matches: [
			{
				id: "match-001",
				tableId: "A",
				matchNumber: 1,
				ruleType: "INITIAL",
				status: "recorded",
				players: [
					{
						player: { id: "player-001", name: "りゅうと" },
						seat: 0,
						score: 42000,
						rank: 1,
						point: 70.4,
					},
					{
						player: { id: "player-002", name: "なるみ" },
						seat: 1,
						score: 28000,
						rank: 3,
						point: 16.8,
					},
					{
						player: { id: "player-003", name: "りゅうじろう" },
						seat: 2,
						score: 36000,
						rank: 2,
						point: 52.4,
					},
					{
						player: { id: "player-004", name: "あきひろ" },
						seat: 3,
						score: 24000,
						rank: 4,
						point: 0.4,
					},
				],
			},
			{
				id: "match-002",
				tableId: "B",
				matchNumber: 1,
				ruleType: "INITIAL",
				status: "not_recorded",
				players: [
					{
						player: { id: "player-005", name: "こうき" },
					},
					{
						player: { id: "player-006", name: "こうた" },
					},
					{
						player: { id: "player-007", name: "わかもり" },
					},
					{
						player: { id: "player-008", name: "ささめ" },
					},
				],
			},
			{
				id: "match-003",
				tableId: "A",
				matchNumber: 2,
				ruleType: "UPPER",
				status: "recorded",
				players: [
					{
						player: { id: "player-005", name: "こうき" },
						seat: 0,
						score: 38000,
						rank: 2,
						point: 45.2,
					},
					{
						player: { id: "player-006", name: "こうた" },
						seat: 1,
						score: 26000,
						rank: 3,
						point: 23.7,
					},
					{
						player: { id: "player-007", name: "わかもり" },
						seat: 2,
						score: 41000,
						rank: 1,
						point: 65.8,
					},
					{
						player: { id: "player-008", name: "ささめ" },
						seat: 3,
						score: 25000,
						rank: 4,
						point: 15.3,
					},
				],
			},
			{
				id: "match-004",
				tableId: "B",
				matchNumber: 2,
				ruleType: "UPPER",
				status: "not_recorded",
				players: [
					{
						player: { id: "player-001", name: "りゅうと" },
					},
					{
						player: { id: "player-002", name: "なるみ" },
					},
					{
						player: { id: "player-003", name: "りゅうじろう" },
					},
					{
						player: { id: "player-004", name: "あきひろ" },
					},
				],
			},
			{
				id: "match-005",
				tableId: "A",
				matchNumber: 3,
				ruleType: "INITIAL",
				status: "not_recorded",
				players: [
					{
						player: { id: "player-001", name: "りゅうと" },
					},
					{
						player: { id: "player-005", name: "こうき" },
					},
					{
						player: { id: "player-003", name: "りゅうじろう" },
					},
					{
						player: { id: "player-007", name: "わかもり" },
					},
				],
			},
			{
				id: "match-006",
				tableId: "B",
				matchNumber: 3,
				ruleType: "LOWER",
				status: "not_recorded",
				players: [
					{
						player: { id: "player-002", name: "なるみ" },
					},
					{
						player: { id: "player-004", name: "あきひろ" },
					},
					{
						player: { id: "player-006", name: "こうた" },
					},
					{
						player: { id: "player-008", name: "ささめ" },
					},
				],
			},
			// 他のマッチも同様（leagueプロパティ削除）
		],
	},
	// リーグID "456" のデータ
	"456": {
		league: {
			id: "456",
			name: "第2回小次郎麻雀大会",
		},
		matches: [
			// マッチデータ（leagueプロパティなし）
		],
	},
};
