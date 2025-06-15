"use client";

import { MatchesScreen } from "@/components/screens/matches";
import { use } from "react";

export default function LeagueDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return <MatchesScreen leagueId={id} />;
}
