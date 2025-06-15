import type { Match } from "@/domain/match";

export const matchesResponse: Record<string, Match[]> = {
  // リーグID "123" のマッチデータ
  "123": [
    {
      id: "match-001",
      tableId: "A",
      matchNumber: 1,
      league: {
        id: "123",
        name: "第1回小次郎麻雀大会",
      },
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
      league: {
        id: "123",
        name: "第1回小次郎麻雀大会",
      },
      status: "not_recorded",
      players: [
        {
          player: { id: "player-005", name: "こうき" },
          seat: 0,
        },
        {
          player: { id: "player-006", name: "こうた" },
          seat: 1,
        },
        {
          player: { id: "player-007", name: "わかもり" },
          seat: 2,
        },
        {
          player: { id: "player-008", name: "ささめ" },
          seat: 3,
        },
      ],
    },
  ],
  // リーグID "456" のマッチデータ
  "456": [
    {
      id: "match-003",
      tableId: "A",
      matchNumber: 1,
      league: {
        id: "456",
        name: "第2回小次郎麻雀大会",
      },
      status: "not_recorded",
      players: [
        {
          player: { id: "player-009", name: "たろう" },
          seat: 0,
        },
        {
          player: { id: "player-010", name: "じろう" },
          seat: 1,
        },
        {
          player: { id: "player-011", name: "さぶろう" },
          seat: 2,
        },
        {
          player: { id: "player-012", name: "しろう" },
          seat: 3,
        },
      ],
    },
  ],
};
