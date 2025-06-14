import { MatchCard } from "@/components/blocks/match-card";
import { PageHeader } from "@/components/layouts/page-header";
import { VStack, Text } from "@chakra-ui/react";

interface LeagueDetailScreenProps {
  leagueId: string;
}

export const LeagueDetailScreen: React.FC<LeagueDetailScreenProps> = ({
  leagueId,
}) => {
  // ここでleagueIdを使ってデータを取得

  return (
    <div>
      {/* todo リーグ名を挿入 */}
      <PageHeader title="リーグ詳細" />
      <VStack align="stretch" pt={4} spacing={4}>
        <MatchCard
          ruleName="初期卓A"
          players={["りゅうと", "なるみ", "りゅうじろう", "あきひろ"]}
        />
        <MatchCard
          ruleName="初期卓B"
          players={["プレイヤー1", "プレイヤー2", "プレイヤー3", "プレイヤー4"]}
        />
      </VStack>
    </div>
  );
};
