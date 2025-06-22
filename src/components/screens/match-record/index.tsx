import RecordMatchTable from "@/components/blocks/match-form/RecordMatchTable";
import { PageHeader } from "@/components/layouts/page-header";
import { Button, HStack } from "@chakra-ui/react";
import Link from "next/link";
import type React from "react";

interface MatchRecordScreenProps {
  leagueId: string;
  matchId: string;
}

export const MatchRecordScreen: React.FC<MatchRecordScreenProps> = ({
  leagueId,
  matchId,
}) => {
  return (
    <div>
      <PageHeader title={leagueId} />
      <RecordMatchTable />
      <HStack justify="space-between">
        <Link href={`/leagues/${leagueId}/matches`}>
          <Button variant="outline">戻る</Button>
        </Link>
        <Button type="submit" colorScheme="blue">
          記録する
        </Button>
      </HStack>
    </div>
  );
};
