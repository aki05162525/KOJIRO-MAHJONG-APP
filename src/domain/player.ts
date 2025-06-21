export interface Player {
  id: string;
  name: string;
}

// 麻雀の風（座席位置）
export type Wind = "EAST" | "SOUTH" | "WEST" | "NORTH";

// 試合結果におけるプレイヤーの成績
export interface PlayerMatchResult {
  player: Player;
  score: number; // 最終得点
  ranking: number; // 順位（1-4）
  wind: Wind; // 風（東南西北）
}
