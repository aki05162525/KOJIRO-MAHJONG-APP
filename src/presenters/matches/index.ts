import type { Match, RuleType } from "@/domain/match";

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

export const getMatchPresentation = (match: Match) => {
  return {
    id: match.id,
    leagueName: match.league.name,
    displayName: `${getRuleTypeName(match.ruleType)}${match.tableId}`,
    playerNames: match.players.map((p) => p.player.name),
    status: match.status,
    canRecord: match.status === "not_recorded",
  };
};

export const getMatchListPresentation = (matches: Match[]) => {
  return matches.map(getMatchPresentation);
};
