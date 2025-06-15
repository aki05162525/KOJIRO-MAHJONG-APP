"use client";

import { MatchesScreen } from "@/components/screens/matches";

export default function LeagueDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <MatchesScreen leagueId={params.id} />;
}
