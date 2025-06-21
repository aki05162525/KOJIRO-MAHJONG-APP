import { PageHeader } from "@/components/layouts/page-header";
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
			<div>マッチID: {matchId}</div>
		</div>
	);
};
