"use client";

import { MatchesScreen } from "@/components/screens/matches";
import { use } from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function LeagueDetailPage({ params }: PageProps) {
  const { id } = use(params);

  return <MatchesScreen leagueId={id} />;
}
