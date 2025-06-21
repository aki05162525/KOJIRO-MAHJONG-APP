import type { Match, RuleType, MatchPlayer } from "@/domain/match";

// UI表示用のプレゼンテーション型
export interface RecordedMatchPlayerPresentation {
  name: string;
  point: number;
  rank: number;
  seat: number;
}

export interface MatchPresentation {
  id: string;
  displayName: string;
  playerNames: string[];
  status: "recorded" | "not_recorded";
  canRecord: boolean;
  recordedPlayers?: RecordedMatchPlayerPresentation[];
}

const getRuleTypeName = (ruleType: RuleType): string => {
  switch (ruleType) {
    case "INITIAL":
      return "初期卓";
    case "UPPER":
      return "上位卓";
    case "LOWER":
      return "下位卓";
    default:
      return "";
  }
};

// ドメインデータをプレゼンテーション用に変換
const convertToRecordedPlayerPresentation = (
  matchPlayer: MatchPlayer
): RecordedMatchPlayerPresentation => ({
  name: matchPlayer.player.name,
  point: matchPlayer.point ?? 0,
  rank: matchPlayer.rank ?? 0,
  seat: matchPlayer.seat,
});

export const getMatchPresentation = (match: Match): MatchPresentation => {
  const basePresentation = {
    id: match.id,
    displayName: `${getRuleTypeName(match.ruleType)}${match.tableId}`,
    playerNames: match.players.map((p) => p.player.name),
    status: match.status,
    canRecord: match.status === "not_recorded",
  };

  if (match.status === "recorded") {
    return {
      ...basePresentation,
      recordedPlayers: match.players.map(convertToRecordedPlayerPresentation),
    };
  }

  return basePresentation;
};

export const getMatchListPresentation = (
  matches: Match[]
): MatchPresentation[] => {
  return matches.map(getMatchPresentation);
};
