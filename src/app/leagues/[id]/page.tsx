"use client";

import { LeagueDetailScreen } from "@/components/screens/league";

export default function LeagueDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <LeagueDetailScreen leagueId={params.id} />;
}
