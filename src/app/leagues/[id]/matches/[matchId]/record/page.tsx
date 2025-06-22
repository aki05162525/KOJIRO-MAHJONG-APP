"use client";

import { MatchRecordScreen } from "@/components/screens/match-record";
import { use } from "react";

interface PageProps {
	params: Promise<{ id: string; matchId: string }>;
}

export default function MatchRecordPage({ params }: PageProps) {
	const { id, matchId } = use(params);

	return <MatchRecordScreen leagueId={id} matchId={matchId} />;
}
